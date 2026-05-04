import { useState } from 'react'
import { Box } from '@mui/material'
import {
  getAppNavigationTarget,
  getProfileNavigationTarget,
} from '../../data/navigationRegistry'
import type {
  AppNavigationItemId,
  ProfileBankDataState,
  ProfileBankDataViewId,
  PrototypeViewId,
} from '../../types/prototype'
import { LoggedAppShell } from '../../components/appShell/LoggedAppShell'
import { ProfileBankDataCard } from '../../components/profile/ProfileBankDataCard'
import { ProfileSaveButton } from '../../components/profile/ProfileSaveButton'
import {
  ProfileSidebar,
  type ProfileSidebarItemId,
} from '../../components/profile/ProfileSidebar'
import { ProfileToast } from '../../components/profile/ProfileToast'
import { UnsavedChangesModal } from '../../components/profile/UnsavedChangesModal'

interface ProfileBankDataPageProps {
  state: ProfileBankDataState
  onBackToLogin: () => void
  onGoToDashboard: () => void
  onNavigate: (viewId: PrototypeViewId) => void
}

type PendingDestination = PrototypeViewId | 'dashboard'

export function ProfileBankDataPage({
  state,
  onBackToLogin,
  onGoToDashboard,
  onNavigate,
}: ProfileBankDataPageProps) {
  const [collapsed, setCollapsed] = useState(state.collapsed)
  const [showProfileMenu, setShowProfileMenu] = useState(state.showProfileMenu)
  const [pendingDestination, setPendingDestination] =
    useState<PendingDestination | null>(null)

  const baseViewId = state.id as ProfileBankDataViewId

  const requestNavigation = (destination: PendingDestination) => {
    if (state.hasUnsavedChanges && !state.showUnsavedChangesModal) {
      setPendingDestination(destination)
      onNavigate('profileBankData.unsavedConfirm')
      return
    }

    if (destination === 'dashboard') {
      onGoToDashboard()
      return
    }

    if (destination === 'login.empty') {
      onBackToLogin()
      return
    }

    onNavigate(destination)
  }

  const handleSidebarSelect = (itemId: ProfileSidebarItemId) => {
    requestNavigation(
      itemId === 'bank' ? baseViewId : getProfileNavigationTarget(itemId),
    )
  }

  const handleMainNavigationSelect = (itemId: AppNavigationItemId) => {
    requestNavigation(getAppNavigationTarget(itemId))
  }

  const handleSaveChanges = () => {
    if (state.stateKey === 'invalid' || state.stateKey === 'invalidSave') {
      onNavigate('profileBankData.invalidSave')
      return
    }

    if (state.stateKey === 'saveError') {
      onNavigate('profileBankData.saveError')
      return
    }

    onNavigate('profileBankData.saved')
  }

  const closeUnsavedModal = () => {
    setPendingDestination(null)
    onNavigate('profileBankData.unsaved')
  }

  const confirmUnsavedExit = () => {
    const destination = pendingDestination
    setPendingDestination(null)

    if (!destination || destination === 'dashboard') {
      onGoToDashboard()
      return
    }

    if (destination === 'login.empty') {
      onBackToLogin()
      return
    }

    onNavigate(destination)
  }

  return (
    <LoggedAppShell
      collapsed={collapsed}
      activeMainItemId="dashboard"
      showFirstAccessModal={false}
      showProfileMenu={showProfileMenu}
      onLogoClick={() => requestNavigation('dashboard')}
      onToggleSidebar={() => setCollapsed((current) => !current)}
      onToggleProfileMenu={() => setShowProfileMenu((current) => !current)}
      onCloseProfileMenu={() => setShowProfileMenu(false)}
      onMainNavigationSelect={handleMainNavigationSelect}
      onOpenNewOperation={() => requestNavigation('placeholderRoute.newOperation')}
      onCloseFirstAccessModal={() => undefined}
      onConcludeRegistration={() => undefined}
      onBackToLogin={() => requestNavigation('login.empty')}
      onOpenMyAccount={() => requestNavigation('profileAccount.biometryApproved')}
    >
      <Box sx={{ display: 'flex', minHeight: '100%' }}>
        <ProfileSidebar activeItem="bank" onSelectItem={handleSidebarSelect} />

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            px: { xs: 2, md: 3, lg: 4 },
            pb: 12,
            pt: 4,
          }}
        >
          {state.toast ? <ProfileToast toast={state.toast} /> : null}

          <ProfileBankDataCard state={state} />
          <ProfileSaveButton onClick={handleSaveChanges} />
        </Box>
      </Box>

      <UnsavedChangesModal
        open={state.showUnsavedChangesModal}
        onClose={closeUnsavedModal}
        onConfirmExit={confirmUnsavedExit}
      />
    </LoggedAppShell>
  )
}
