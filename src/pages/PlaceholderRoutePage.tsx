import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded'
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import { Box } from '@mui/material'
import { useState } from 'react'
import { LoggedAppShell } from '../components/appShell/LoggedAppShell'
import { PlaceholderPage } from '../components/common/PlaceholderPage'
import { getAppNavigationTarget } from '../data/navigationRegistry'
import type {
  AppNavigationItemId,
  PlaceholderRouteState,
  PrototypeViewId,
} from '../types/prototype'

interface PlaceholderRoutePageProps {
  state: PlaceholderRouteState
  onNavigate: (viewId: PrototypeViewId) => void
  onBackToLogin: () => void
}

function getIcon(stateKey: PlaceholderRouteState['stateKey']) {
  switch (stateKey) {
    case 'crm':
      return <AssignmentRoundedIcon />
    case 'operations':
      return <AccountBalanceRoundedIcon />
    case 'team':
      return <Groups2RoundedIcon />
    case 'supportMaterial':
      return <FolderRoundedIcon />
    case 'transactions':
      return <SyncAltRoundedIcon />
    case 'wallet':
      return <AccountBalanceWalletRoundedIcon />
    case 'campaigns':
      return <StarsRoundedIcon />
    case 'newOperation':
      return <AddRoundedIcon />
    case 'reports':
    default:
      return <InsertDriveFileRoundedIcon />
  }
}

export function PlaceholderRoutePage({
  state,
  onNavigate,
  onBackToLogin,
}: PlaceholderRoutePageProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const goToMainItem = (itemId: AppNavigationItemId) => {
    onNavigate(getAppNavigationTarget(itemId))
  }

  return (
    <LoggedAppShell
      collapsed={collapsed}
      activeMainItemId={state.mainItemId}
      showFirstAccessModal={false}
      showProfileMenu={showProfileMenu}
      onLogoClick={() => onNavigate('commercialDashboard.expanded')}
      onToggleSidebar={() => setCollapsed((current) => !current)}
      onToggleProfileMenu={() => setShowProfileMenu((current) => !current)}
      onCloseProfileMenu={() => setShowProfileMenu(false)}
      onMainNavigationSelect={goToMainItem}
      onOpenNewOperation={() => onNavigate('placeholderRoute.newOperation')}
      onCloseFirstAccessModal={() => undefined}
      onConcludeRegistration={() => undefined}
      onOpenMyAccount={() => onNavigate('profileAccount.biometryApproved')}
      onBackToLogin={onBackToLogin}
    >
      <Box sx={{ px: { xs: 2, md: 3, lg: 4 }, py: 2.5 }}>
        <PlaceholderPage
          title={state.title}
          description={state.description}
          icon={getIcon(state.stateKey)}
          actionLabel={state.actionLabel}
          onAction={() => onNavigate('commercialDashboard.expanded')}
        />
      </Box>
    </LoggedAppShell>
  )
}
