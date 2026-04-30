import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { appUserProfile } from '../../data/appNavigation'
import { AppTopbar } from './AppTopbar'
import { FirstAccessModal } from './FirstAccessModal'
import { MainSidebar } from './MainSidebar'
import { UserProfileMenu } from './UserProfileMenu'

interface LoggedAppShellProps {
  collapsed: boolean
  showFirstAccessModal: boolean
  showProfileMenu: boolean
  onToggleSidebar: () => void
  onToggleProfileMenu: () => void
  onCloseProfileMenu: () => void
  onCloseFirstAccessModal: () => void
  onConcludeRegistration: () => void
  onOpenMyAccount?: () => void
  onBackToLogin: () => void
  children: ReactNode
}

export function LoggedAppShell({
  collapsed,
  showFirstAccessModal,
  showProfileMenu,
  onToggleSidebar,
  onToggleProfileMenu,
  onCloseProfileMenu,
  onCloseFirstAccessModal,
  onConcludeRegistration,
  onOpenMyAccount,
  onBackToLogin,
  children,
}: LoggedAppShellProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '56px 1fr',
        bgcolor: '#F8FAFD',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 20 }}>
        <AppTopbar
          collapsed={collapsed}
          user={appUserProfile}
          onToggleSidebar={onToggleSidebar}
          onToggleProfileMenu={onToggleProfileMenu}
        />
        <UserProfileMenu
          open={showProfileMenu}
          user={appUserProfile}
          onOpenMyAccount={onOpenMyAccount}
          onLogout={onBackToLogin}
        />
      </Box>

      <Box sx={{ display: 'flex', minHeight: 0 }}>
        <MainSidebar collapsed={collapsed} />
        <Box
          component="main"
          onClick={() => {
            if (showProfileMenu) {
              onCloseProfileMenu()
            }
          }}
          sx={{
            flex: 1,
            minWidth: 0,
            overflow: 'auto',
            bgcolor: '#FCFDFE',
          }}
        >
          {children}
        </Box>
      </Box>

      <FirstAccessModal
        open={showFirstAccessModal}
        onClose={onCloseFirstAccessModal}
        onConcludeRegistration={onConcludeRegistration}
      />
    </Box>
  )
}
