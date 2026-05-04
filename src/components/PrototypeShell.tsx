import { useState } from 'react'
import {
  Box,
  Button,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { commercialDashboardStates } from '../data/commercialDashboardStates'
import { prototypeNavigation, prototypeStateMap } from '../data/prototypeNavigation'
import type {
  CommercialDashboardState,
  CompleteRegistrationBankState,
  CompleteRegistrationBiometryState,
  CompleteRegistrationDocumentState,
  CompleteRegistrationFeedbackState,
  LoginPrototypeState,
  PasswordRecoveryMessagesState,
  PasswordRecoveryNewPasswordState,
  PlaceholderRouteState,
  PasswordRecoveryRequestState,
  ProfileAccountState,
  ProfileAccountViewId,
  ProfileBankDataState,
  ProfilePlaceholderState,
  PrototypeGroupId,
  PrototypeScreenId,
  PrototypeViewId,
  RecoveryChannel,
  RegistrationStepOneState,
  RegistrationStepThreeState,
  RegistrationStepTwoState,
  RegistrationSuccessState,
} from '../types/prototype'
import { CommercialDashboard } from '../pages/commercial/CommercialDashboard'
import { PlaceholderRoutePage } from '../pages/PlaceholderRoutePage'
import { ProfileAccountPage } from '../pages/profile/ProfileAccountPage'
import { ProfileBankDataPage } from '../pages/profile/ProfileBankDataPage'
import { ProfilePlaceholderPage } from '../pages/profile/ProfilePlaceholderPage'
import { LoginScreen } from './LoginScreen'
import { PrototypeSidebar } from './PrototypeSidebar'
import { PasswordRecoveryMessages } from './passwordRecovery/PasswordRecoveryMessages'
import { PasswordRecoveryNewPassword } from './passwordRecovery/PasswordRecoveryNewPassword'
import { PasswordRecoveryRequest } from './passwordRecovery/PasswordRecoveryRequest'
import { EmailConfirmed } from './registration/EmailConfirmed'
import { RegistrationStepOne } from './registration/RegistrationStepOne'
import { RegistrationStepThree } from './registration/RegistrationStepThree'
import { RegistrationStepTwo } from './registration/RegistrationStepTwo'
import { RegistrationSuccess } from './registration/RegistrationSuccess'

function getMessagesViewId(channel: RecoveryChannel): PrototypeViewId {
  return `passwordRecoveryMessages.${channel}`
}

function findGroupIdByViewId(viewId: PrototypeViewId): PrototypeGroupId | null {
  const matchingGroup = prototypeNavigation.find((group) =>
    group.children.some((child) => child.id === viewId),
  )

  return matchingGroup?.id ?? null
}

export function PrototypeShell() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedStateId, setSelectedStateId] =
    useState<PrototypeViewId>('login.empty')
  const [expandedGroupIds, setExpandedGroupIds] = useState<PrototypeGroupId[]>(
    [],
  )
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const currentState = prototypeStateMap[selectedStateId]
  const dashboardBaseState = commercialDashboardStates[0]

  const navigateTo = (viewId: PrototypeViewId, autoExpand = true) => {
    setSelectedStateId(viewId)

    if (autoExpand) {
      const targetGroupId = findGroupIdByViewId(viewId)

      if (!targetGroupId) {
        return
      }

      setExpandedGroupIds((current) =>
        current.includes(targetGroupId) ? current : [...current, targetGroupId],
      )
    }
  }

  const toggleGroup = (groupId: PrototypeGroupId) => {
    setExpandedGroupIds((current) =>
      current.includes(groupId)
        ? current.filter((id) => id !== groupId)
        : [...current, groupId],
    )
  }

  const goToPreviousStep = (screenId: PrototypeScreenId) => {
    switch (screenId) {
      case 'registrationStepOne':
        navigateTo('login.empty')
        break
      case 'registrationStepTwo':
        navigateTo('registrationStepOne.valid')
        break
      case 'registrationStepThree':
        navigateTo('registrationStepTwo.valid')
        break
      case 'registrationSuccess':
      case 'emailConfirmed':
      case 'passwordRecoveryRequest':
      case 'passwordRecoveryMessages':
      case 'passwordRecoveryNewPassword':
        navigateTo('login.empty')
        break
      default:
        navigateTo('login.empty')
    }
  }

  const handleStepOneContinue = (state: RegistrationStepOneState) => {
    if (state.stateKey === 'valid') {
      navigateTo('registrationStepTwo.empty')
      return
    }

    navigateTo(
      state.stateKey === 'invalid'
        ? 'registrationStepOne.invalid'
        : 'registrationStepOne.required',
    )
  }

  const handleStepTwoContinue = (state: RegistrationStepTwoState) => {
    if (state.stateKey === 'valid') {
      navigateTo('registrationStepThree.empty')
      return
    }

    navigateTo(
      state.stateKey === 'invalid'
        ? 'registrationStepTwo.invalid'
        : 'registrationStepTwo.required',
    )
  }

  const handleStepThreeComplete = (state: RegistrationStepThreeState) => {
    if (state.stateKey === 'valid') {
      navigateTo('registrationSuccess.sent')
      return
    }

    navigateTo(
      state.stateKey === 'invalid'
        ? 'registrationStepThree.invalid'
        : 'registrationStepThree.required',
    )
  }

  const handlePasswordRecoverySubmit = (
    state: PasswordRecoveryRequestState,
    channel: RecoveryChannel,
  ) => {
    if (state.stateKey === 'blocked') {
      navigateTo('passwordRecoveryRequest.blocked')
      return
    }

    if (!state.identifier.value.trim()) {
      navigateTo('passwordRecoveryRequest.required')
      return
    }

    navigateTo(getMessagesViewId(channel))
  }

  const handlePasswordResetSubmit = (
    state: PasswordRecoveryNewPasswordState,
  ) => {
    if (state.stateKey === 'valid') {
      navigateTo('passwordRecoveryNewPassword.valid')
      return
    }

    navigateTo(
      state.stateKey === 'invalid'
        ? 'passwordRecoveryNewPassword.invalid'
        : 'passwordRecoveryNewPassword.required',
    )
  }

  const handleLoginSubmit = (state: LoginPrototypeState) => {
    if (state.loading) {
      return
    }

    switch (state.stateKey) {
      case 'filled':
      case 'passwordVisible':
      case 'rememberMe':
        navigateTo('commercialDashboard.firstAccess')
        break
      case 'invalid':
        navigateTo('login.invalid')
        break
      case 'generalError':
        navigateTo('login.generalError')
        break
      default:
        navigateTo('login.required')
        break
    }
  }

  const handleCompleteRegistrationDocumentContinue = (
    state: CompleteRegistrationDocumentState,
  ) => {
    if (state.stateKey === 'valid') {
      navigateTo('completeRegistrationBank.empty')
      return
    }

    navigateTo(
      state.stateKey === 'invalid'
        ? 'completeRegistrationDocument.invalid'
        : 'completeRegistrationDocument.required',
    )
  }

  const handleCompleteRegistrationBankContinue = (
    state: CompleteRegistrationBankState,
  ) => {
    if (state.stateKey === 'valid') {
      navigateTo('completeRegistrationBiometry.waiting')
      return
    }

    navigateTo(
      state.stateKey === 'invalid'
        ? 'completeRegistrationBank.invalid'
        : 'completeRegistrationBank.required',
    )
  }

  const handleCompleteRegistrationBiometryPrimaryAction = (
    state: CompleteRegistrationBiometryState,
  ) => {
    switch (state.stateKey) {
      case 'waiting':
        navigateTo('completeRegistrationBiometry.analyzing')
        break
      case 'analyzing':
      case 'success':
        navigateTo('completeRegistrationFeedback.emailConfirmed')
        break
      case 'error':
        navigateTo('completeRegistrationBiometry.error')
        break
      default:
        break
    }
  }

  const openProfile = (viewId: ProfileAccountViewId = 'profileAccount.biometryApproved') => {
    navigateTo(viewId)
  }

  const renderScreen = () => {
    switch (currentState.screenId) {
      case 'login':
        return (
          <LoginScreen
            key={currentState.id}
            state={currentState as LoginPrototypeState}
            onSubmit={() => handleLoginSubmit(currentState as LoginPrototypeState)}
            onCreateAccount={() => navigateTo('registrationStepOne.empty')}
            onForgotPassword={() => navigateTo('passwordRecoveryRequest.empty')}
          />
        )
      case 'registrationStepOne':
        return (
          <RegistrationStepOne
            key={currentState.id}
            state={currentState as RegistrationStepOneState}
            onBack={() => goToPreviousStep('registrationStepOne')}
            onContinue={() =>
              handleStepOneContinue(currentState as RegistrationStepOneState)
            }
          />
        )
      case 'registrationStepTwo':
        return (
          <RegistrationStepTwo
            key={currentState.id}
            state={currentState as RegistrationStepTwoState}
            onBack={() => goToPreviousStep('registrationStepTwo')}
            onContinue={() =>
              handleStepTwoContinue(currentState as RegistrationStepTwoState)
            }
          />
        )
      case 'registrationStepThree':
        return (
          <RegistrationStepThree
            key={currentState.id}
            state={currentState as RegistrationStepThreeState}
            onBack={() => goToPreviousStep('registrationStepThree')}
            onComplete={() =>
              handleStepThreeComplete(currentState as RegistrationStepThreeState)
            }
          />
        )
      case 'registrationSuccess':
        return (
          <RegistrationSuccess
            key={currentState.id}
            state={currentState as RegistrationSuccessState}
            onGoToLogin={() => navigateTo('login.empty')}
            onConfirmEmail={() => navigateTo('emailConfirmed.confirmed')}
          />
        )
      case 'emailConfirmed':
        return (
          <EmailConfirmed
            key={currentState.id}
            onGoToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'passwordRecoveryRequest':
        return (
          <PasswordRecoveryRequest
            key={currentState.id}
            state={currentState as PasswordRecoveryRequestState}
            onSubmit={(channel) =>
              handlePasswordRecoverySubmit(
                currentState as PasswordRecoveryRequestState,
                channel,
              )
            }
            onGoToLogin={() => navigateTo('login.empty')}
            onContactSupport={() => window.console.log('contact-support')}
          />
        )
      case 'passwordRecoveryMessages':
        return (
          <PasswordRecoveryMessages
            key={currentState.id}
            state={currentState as PasswordRecoveryMessagesState}
            onGoToLogin={() => navigateTo('login.empty')}
            onSimulateLinkClick={() => navigateTo('passwordRecoveryNewPassword.empty')}
            onResend={(channel) => navigateTo(getMessagesViewId(channel))}
          />
        )
      case 'passwordRecoveryNewPassword':
        return (
          <PasswordRecoveryNewPassword
            key={currentState.id}
            state={currentState as PasswordRecoveryNewPasswordState}
            onSubmit={() =>
              handlePasswordResetSubmit(
                currentState as PasswordRecoveryNewPasswordState,
              )
            }
            onAutoRedirectToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'commercialDashboard':
        return (
          <CommercialDashboard
            key={currentState.id}
            state={currentState as CommercialDashboardState}
            onNavigate={(viewId) => navigateTo(viewId)}
            onOpenMyAccount={() => openProfile()}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'completeRegistrationDocument':
        return (
          <CommercialDashboard
            key={currentState.id}
            state={dashboardBaseState}
            initialCompleteRegistrationState={{
              kind: 'document',
              state: currentState as CompleteRegistrationDocumentState,
            }}
            onDocumentContinue={(state) =>
              handleCompleteRegistrationDocumentContinue(state)
            }
            onNavigate={(viewId) => navigateTo(viewId)}
            onOpenMyAccount={() => openProfile()}
            onReturnToDashboard={() => navigateTo('commercialDashboard.expanded')}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'completeRegistrationBank':
        return (
          <CommercialDashboard
            key={currentState.id}
            state={dashboardBaseState}
            initialCompleteRegistrationState={{
              kind: 'bank',
              state: currentState as CompleteRegistrationBankState,
            }}
            onBankContinue={(state) => handleCompleteRegistrationBankContinue(state)}
            onBankBack={() => navigateTo('completeRegistrationDocument.valid')}
            onNavigate={(viewId) => navigateTo(viewId)}
            onOpenMyAccount={() => openProfile()}
            onReturnToDashboard={() => navigateTo('commercialDashboard.expanded')}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'completeRegistrationBiometry':
        return (
          <CommercialDashboard
            key={currentState.id}
            state={dashboardBaseState}
            initialCompleteRegistrationState={{
              kind: 'biometry',
              state: currentState as CompleteRegistrationBiometryState,
            }}
            onBiometryPrimaryAction={(state) =>
              handleCompleteRegistrationBiometryPrimaryAction(state)
            }
            onBiometryBack={() => navigateTo('completeRegistrationBank.valid')}
            onBiometryRetry={() => navigateTo('completeRegistrationBiometry.waiting')}
            onBiometrySimulateSuccess={() =>
              navigateTo('completeRegistrationBiometry.success')
            }
            onNavigate={(viewId) => navigateTo(viewId)}
            onOpenMyAccount={() => openProfile()}
            onReturnToDashboard={() => navigateTo('commercialDashboard.expanded')}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'completeRegistrationFeedback':
        return (
          <CommercialDashboard
            key={currentState.id}
            state={dashboardBaseState}
            initialCompleteRegistrationState={{
              kind: 'feedback',
              state: currentState as CompleteRegistrationFeedbackState,
            }}
            onNavigate={(viewId) => navigateTo(viewId)}
            onOpenMyAccount={() => openProfile()}
            onReturnToDashboard={() => navigateTo('commercialDashboard.expanded')}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'profileAccount':
        return (
          <ProfileAccountPage
            key={currentState.id}
            state={currentState as ProfileAccountState}
            onNavigate={(viewId) => navigateTo(viewId)}
            onGoToDashboard={() => navigateTo('commercialDashboard.expanded')}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'profileBankData':
        return (
          <ProfileBankDataPage
            key={currentState.id}
            state={currentState as ProfileBankDataState}
            onNavigate={(viewId) => navigateTo(viewId)}
            onGoToDashboard={() => navigateTo('commercialDashboard.expanded')}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'placeholderRoute':
        return (
          <PlaceholderRoutePage
            key={currentState.id}
            state={currentState as PlaceholderRouteState}
            onNavigate={(viewId) => navigateTo(viewId)}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      case 'profilePlaceholder':
        return (
          <ProfilePlaceholderPage
            key={currentState.id}
            state={currentState as ProfilePlaceholderState}
            onNavigate={(viewId) => navigateTo(viewId)}
            onBackToLogin={() => navigateTo('login.empty')}
          />
        )
      default:
        return null
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {!isMobile ? (
        <PrototypeSidebar
          groups={prototypeNavigation}
          selectedStateId={selectedStateId}
          expandedGroupIds={expandedGroupIds}
          onSelect={(viewId) => setSelectedStateId(viewId)}
          onToggleGroup={toggleGroup}
        />
      ) : null}

      <Box component="main" sx={{ flex: 1, minWidth: 0, position: 'relative' }}>
        {isMobile ? (
          <>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: 'fixed',
                top: 16,
                left: 16,
                zIndex: 1200,
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                color="inherit"
                onClick={() => setMobileSidebarOpen(true)}
                startIcon={<MenuRoundedIcon />}
                sx={{
                  minHeight: 44,
                  borderRadius: '8px',
                  px: 2.1,
                  color: 'text.primary',
                  bgcolor: 'rgba(255,255,255,0.94)',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.14)',
                  '&:hover': {
                    bgcolor: '#FFFFFF',
                  },
                }}
              >
                Estados
              </Button>
              <Chip
                label={currentState.label}
                sx={{
                  maxWidth: 260,
                  borderRadius: '4px',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  color: 'text.primary',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.1)',
                  '& .MuiChip-label': {
                    px: 1.6,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                }}
              />
            </Stack>

            <PrototypeSidebar
              mobile
              open={mobileSidebarOpen}
              onClose={() => setMobileSidebarOpen(false)}
              groups={prototypeNavigation}
              selectedStateId={selectedStateId}
              expandedGroupIds={expandedGroupIds}
              onSelect={(viewId) => {
                setSelectedStateId(viewId)
                setMobileSidebarOpen(false)
              }}
              onToggleGroup={toggleGroup}
            />
          </>
        ) : null}

        {renderScreen()}
      </Box>
    </Box>
  )
}
