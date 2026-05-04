import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import { Box } from '@mui/material'
import { useState } from 'react'
import { LoggedAppShell } from '../../components/appShell/LoggedAppShell'
import { PlaceholderPage } from '../../components/common/PlaceholderPage'
import {
  ProfileSidebar,
  type ProfileSidebarItemId,
} from '../../components/profile/ProfileSidebar'
import { getAppNavigationTarget, getProfileNavigationTarget } from '../../data/navigationRegistry'
import type {
  AppNavigationItemId,
  ProfilePlaceholderState,
  PrototypeViewId,
} from '../../types/prototype'

interface ProfilePlaceholderPageProps {
  state: ProfilePlaceholderState
  onNavigate: (viewId: PrototypeViewId) => void
  onBackToLogin: () => void
}

function getIcon(profileItemId: ProfilePlaceholderState['profileItemId']) {
  switch (profileItemId) {
    case 'security':
      return <SecurityRoundedIcon />
    case 'history':
      return <HistoryRoundedIcon />
    case 'settings':
    default:
      return <TuneRoundedIcon />
  }
}

export function ProfilePlaceholderPage({
  state,
  onNavigate,
  onBackToLogin,
}: ProfilePlaceholderPageProps) {
  const [collapsed, setCollapsed] = useState(state.collapsed)
  const [showProfileMenu, setShowProfileMenu] = useState(state.showProfileMenu)

  const handleProfileSelect = (itemId: ProfileSidebarItemId) => {
    onNavigate(getProfileNavigationTarget(itemId))
  }

  const handleMainNavigation = (itemId: AppNavigationItemId) => {
    onNavigate(getAppNavigationTarget(itemId))
  }

  return (
    <LoggedAppShell
      collapsed={collapsed}
      activeMainItemId="dashboard"
      showFirstAccessModal={false}
      showProfileMenu={showProfileMenu}
      onLogoClick={() => onNavigate('commercialDashboard.expanded')}
      onToggleSidebar={() => setCollapsed((current) => !current)}
      onToggleProfileMenu={() => setShowProfileMenu((current) => !current)}
      onCloseProfileMenu={() => setShowProfileMenu(false)}
      onMainNavigationSelect={handleMainNavigation}
      onOpenNewOperation={() => onNavigate('placeholderRoute.newOperation')}
      onCloseFirstAccessModal={() => undefined}
      onConcludeRegistration={() => undefined}
      onOpenMyAccount={() => onNavigate('profileAccount.biometryApproved')}
      onBackToLogin={onBackToLogin}
    >
      <Box sx={{ display: 'flex', minHeight: '100%' }}>
        <ProfileSidebar
          activeItem={state.profileItemId}
          onSelectItem={handleProfileSelect}
        />

        <Box sx={{ flex: 1, minWidth: 0, px: { xs: 2, md: 3, lg: 4 }, py: 2.5 }}>
          <PlaceholderPage
            title={state.title}
            description={state.description}
            icon={getIcon(state.profileItemId)}
            actionLabel="Ir para Dashboard"
            onAction={() => onNavigate('commercialDashboard.expanded')}
          />
        </Box>
      </Box>
    </LoggedAppShell>
  )
}
