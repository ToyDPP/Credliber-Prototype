import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import { CompleteRegistrationBanner } from '../../components/appShell/CompleteRegistrationBanner'
import { DashboardBreadcrumb } from '../../components/appShell/DashboardBreadcrumb'
import { LoggedAppShell } from '../../components/appShell/LoggedAppShell'
import { BankDataStep } from '../../components/completeRegistration/BankDataStep'
import { CompleteRegistrationFeedback } from '../../components/completeRegistration/CompleteRegistrationFeedback'
import { CompleteRegistrationModal } from '../../components/completeRegistration/CompleteRegistrationModal'
import { DocumentIdentificationStep } from '../../components/completeRegistration/DocumentIdentificationStep'
import { FacialBiometryStep } from '../../components/completeRegistration/FacialBiometryStep'
import {
  completeRegistrationBankStates,
  completeRegistrationBiometryStates,
  completeRegistrationDocumentStates,
  completeRegistrationFeedbackStates,
} from '../../data/completeRegistrationStates'
import type {
  CommercialDashboardState,
  CompleteRegistrationBankState,
  CompleteRegistrationBiometryState,
  CompleteRegistrationDocumentState,
  CompleteRegistrationFeedbackState,
} from '../../types/prototype'

type CompleteRegistrationFlowState =
  | {
      kind: 'document'
      state: CompleteRegistrationDocumentState
    }
  | {
      kind: 'bank'
      state: CompleteRegistrationBankState
    }
  | {
      kind: 'biometry'
      state: CompleteRegistrationBiometryState
    }
  | {
      kind: 'feedback'
      state: CompleteRegistrationFeedbackState
    }

interface CommercialDashboardProps {
  state: CommercialDashboardState
  onBackToLogin: () => void
  initialCompleteRegistrationState?: CompleteRegistrationFlowState | null
  onReturnToDashboard?: () => void
  onDocumentContinue?: (state: CompleteRegistrationDocumentState) => void
  onBankContinue?: (state: CompleteRegistrationBankState) => void
  onBankBack?: () => void
  onBiometryPrimaryAction?: (state: CompleteRegistrationBiometryState) => void
  onBiometryRetry?: () => void
  onBiometryBack?: () => void
  onBiometrySimulateSuccess?: () => void
}

const documentEmptyState = completeRegistrationDocumentStates.find(
  ({ stateKey }) => stateKey === 'empty',
)
const documentValidState = completeRegistrationDocumentStates.find(
  ({ stateKey }) => stateKey === 'valid',
)
const bankEmptyState = completeRegistrationBankStates.find(
  ({ stateKey }) => stateKey === 'empty',
)
const bankValidState = completeRegistrationBankStates.find(
  ({ stateKey }) => stateKey === 'valid',
)
const biometryWaitingState = completeRegistrationBiometryStates.find(
  ({ stateKey }) => stateKey === 'waiting',
)
const biometrySuccessState = completeRegistrationBiometryStates.find(
  ({ stateKey }) => stateKey === 'success',
)
const feedbackConfirmedState = completeRegistrationFeedbackStates.find(
  ({ stateKey }) => stateKey === 'emailConfirmed',
)

export function CommercialDashboard({
  state,
  onBackToLogin,
  initialCompleteRegistrationState = null,
  onReturnToDashboard,
  onDocumentContinue,
  onBankContinue,
  onBankBack,
  onBiometryPrimaryAction,
  onBiometryRetry,
  onBiometryBack,
  onBiometrySimulateSuccess,
}: CommercialDashboardProps) {
  const [collapsed, setCollapsed] = useState(state.collapsed)
  const [showFirstAccessModal, setShowFirstAccessModal] = useState(
    state.showFirstAccessModal,
  )
  const [showProfileMenu, setShowProfileMenu] = useState(state.showProfileMenu)
  const [completeRegistrationState, setCompleteRegistrationState] =
    useState<CompleteRegistrationFlowState | null>(
      initialCompleteRegistrationState,
    )

  const closeCompleteRegistration = () => {
    setCompleteRegistrationState(null)

    if (onReturnToDashboard) {
      onReturnToDashboard()
    }
  }

  const openDocumentFlow = () => {
    setShowFirstAccessModal(false)

    if (onDocumentContinue || initialCompleteRegistrationState) {
      setCompleteRegistrationState({
        kind: 'document',
        state: documentEmptyState!,
      })
      return
    }

    setCompleteRegistrationState({
      kind: 'document',
      state: documentEmptyState!,
    })
  }

  const handleDocumentContinue = (documentState: CompleteRegistrationDocumentState) => {
    if (onDocumentContinue) {
      onDocumentContinue(documentState)
      return
    }

    if (documentState.stateKey === 'valid') {
      setCompleteRegistrationState({
        kind: 'bank',
        state: bankEmptyState!,
      })
      return
    }

    setCompleteRegistrationState({
      kind: 'document',
      state:
        documentState.stateKey === 'invalid'
          ? documentState
          : completeRegistrationDocumentStates.find(
              ({ stateKey }) => stateKey === 'required',
            )!,
    })
  }

  const handleBankContinue = (bankState: CompleteRegistrationBankState) => {
    if (onBankContinue) {
      onBankContinue(bankState)
      return
    }

    if (bankState.stateKey === 'valid') {
      setCompleteRegistrationState({
        kind: 'biometry',
        state: biometryWaitingState!,
      })
      return
    }

    setCompleteRegistrationState({
      kind: 'bank',
      state:
        bankState.stateKey === 'invalid'
          ? bankState
          : completeRegistrationBankStates.find(
              ({ stateKey }) => stateKey === 'required',
            )!,
    })
  }

  const handleBankBackAction = () => {
    if (onBankBack) {
      onBankBack()
      return
    }

    setCompleteRegistrationState({
      kind: 'document',
      state: documentValidState!,
    })
  }

  const handleBiometryPrimaryAction = (
    biometryState: CompleteRegistrationBiometryState,
  ) => {
    if (onBiometryPrimaryAction) {
      onBiometryPrimaryAction(biometryState)
      return
    }

    if (biometryState.stateKey === 'waiting') {
      setCompleteRegistrationState({
        kind: 'biometry',
        state: completeRegistrationBiometryStates.find(
          ({ stateKey }) => stateKey === 'analyzing',
        )!,
      })
      return
    }

    if (biometryState.stateKey === 'analyzing' || biometryState.stateKey === 'success') {
      setCompleteRegistrationState({
        kind: 'feedback',
        state: feedbackConfirmedState!,
      })
      return
    }

    setCompleteRegistrationState({
      kind: 'biometry',
      state: biometryState,
    })
  }

  const handleBiometryRetryAction = () => {
    if (onBiometryRetry) {
      onBiometryRetry()
      return
    }

    setCompleteRegistrationState({
      kind: 'biometry',
      state: biometryWaitingState!,
    })
  }

  const handleBiometryBackAction = () => {
    if (onBiometryBack) {
      onBiometryBack()
      return
    }

    setCompleteRegistrationState({
      kind: 'bank',
      state: bankValidState!,
    })
  }

  const handleBiometrySimulateSuccessAction = () => {
    if (onBiometrySimulateSuccess) {
      onBiometrySimulateSuccess()
      return
    }

    setCompleteRegistrationState({
      kind: 'biometry',
      state: biometrySuccessState!,
    })
  }

  const renderCompleteRegistrationModal = () => {
    if (!completeRegistrationState) {
      return null
    }

    if (completeRegistrationState.kind === 'document') {
      return (
        <CompleteRegistrationModal open onClose={closeCompleteRegistration}>
          <DocumentIdentificationStep
            state={completeRegistrationState.state}
            onContinue={() => handleDocumentContinue(completeRegistrationState.state)}
          />
        </CompleteRegistrationModal>
      )
    }

    if (completeRegistrationState.kind === 'bank') {
      return (
        <CompleteRegistrationModal
          open
          onClose={closeCompleteRegistration}
          onBack={handleBankBackAction}
        >
          <BankDataStep
            state={completeRegistrationState.state}
            onContinue={() => handleBankContinue(completeRegistrationState.state)}
          />
        </CompleteRegistrationModal>
      )
    }

    if (completeRegistrationState.kind === 'biometry') {
      return (
        <CompleteRegistrationModal
          open
          onClose={closeCompleteRegistration}
          onBack={handleBiometryBackAction}
        >
          <FacialBiometryStep
            state={completeRegistrationState.state}
            onPrimaryAction={() =>
              handleBiometryPrimaryAction(completeRegistrationState.state)
            }
            onRetry={handleBiometryRetryAction}
            onBack={handleBiometryBackAction}
            onSimulateSuccess={handleBiometrySimulateSuccessAction}
          />
        </CompleteRegistrationModal>
      )
    }

    return (
      <CompleteRegistrationModal open compact onClose={closeCompleteRegistration}>
        <CompleteRegistrationFeedback
          variant={completeRegistrationState.state.stateKey}
          onBackToSystem={closeCompleteRegistration}
        />
      </CompleteRegistrationModal>
    )
  }

  return (
    <>
      <LoggedAppShell
        collapsed={collapsed}
        showFirstAccessModal={showFirstAccessModal}
        showProfileMenu={showProfileMenu}
        onToggleSidebar={() => setCollapsed((current) => !current)}
        onToggleProfileMenu={() => setShowProfileMenu((current) => !current)}
        onCloseProfileMenu={() => setShowProfileMenu(false)}
        onCloseFirstAccessModal={() => setShowFirstAccessModal(false)}
        onConcludeRegistration={openDocumentFlow}
        onBackToLogin={onBackToLogin}
      >
        <Stack
          spacing={3}
          sx={{
            px: { xs: 2, md: 3, lg: 4 },
            py: 2.2,
          }}
        >
          {state.showBanner ? (
            <CompleteRegistrationBanner onClick={openDocumentFlow} />
          ) : null}

          <DashboardBreadcrumb />

          <Box
            sx={{
              minHeight: 420,
              borderRadius: 0,
              background: state.showBanner
                ? 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,1) 72%)'
                : 'transparent',
            }}
          />
        </Stack>
      </LoggedAppShell>

      {renderCompleteRegistrationModal()}
    </>
  )
}
