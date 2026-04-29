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
import { prototypeNavigation, prototypeStateMap } from '../data/prototypeNavigation'
import type {
  LoginPrototypeState,
  PrototypeScreenId,
  PrototypeViewId,
  RegistrationStepOneState,
  RegistrationStepThreeState,
  RegistrationStepTwoState,
  RegistrationSuccessState,
} from '../types/prototype'
import { LoginScreen } from './LoginScreen'
import { PrototypeSidebar } from './PrototypeSidebar'
import { EmailConfirmed } from './registration/EmailConfirmed'
import { RegistrationStepOne } from './registration/RegistrationStepOne'
import { RegistrationStepThree } from './registration/RegistrationStepThree'
import { RegistrationStepTwo } from './registration/RegistrationStepTwo'
import { RegistrationSuccess } from './registration/RegistrationSuccess'

export function PrototypeShell() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedStateId, setSelectedStateId] =
    useState<PrototypeViewId>('login.empty')
  const [expandedGroupIds, setExpandedGroupIds] = useState<PrototypeScreenId[]>(
    [],
  )
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const currentState = prototypeStateMap[selectedStateId]

  const navigateTo = (viewId: PrototypeViewId, autoExpand = true) => {
    setSelectedStateId(viewId)

    if (autoExpand) {
      const targetGroupId = prototypeStateMap[viewId].screenId

      setExpandedGroupIds((current) =>
        current.includes(targetGroupId) ? current : [...current, targetGroupId],
      )
    }
  }

  const toggleGroup = (groupId: PrototypeScreenId) => {
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

  const renderScreen = () => {
    switch (currentState.screenId) {
      case 'login':
        return (
          <LoginScreen
            key={currentState.id}
            state={currentState as LoginPrototypeState}
            onCreateAccount={() => navigateTo('registrationStepOne.empty')}
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
                  borderRadius: 999,
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
                  maxWidth: 220,
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
