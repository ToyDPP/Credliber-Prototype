import {
  Box,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import type { ReactNode } from 'react'
import { useState } from 'react'
import type { AppNavigationItemId } from '../../types/prototype'
import { appUserProfile } from '../../data/appNavigation'
import { AppTopbar } from './AppTopbar'
import { FirstAccessModal } from './FirstAccessModal'
import { MainSidebar } from './MainSidebar'
import { UserProfileMenu } from './UserProfileMenu'

interface LoggedAppShellProps {
  collapsed: boolean
  activeMainItemId: AppNavigationItemId
  showFirstAccessModal: boolean
  showProfileMenu: boolean
  onLogoClick: () => void
  onToggleSidebar: () => void
  onToggleProfileMenu: () => void
  onCloseProfileMenu: () => void
  onMainNavigationSelect: (itemId: AppNavigationItemId) => void
  onOpenNewOperation: () => void
  onCloseFirstAccessModal: () => void
  onConcludeRegistration: () => void
  onOpenMyAccount?: () => void
  onBackToLogin: () => void
  children: ReactNode
}

const notifications = [
  'Conclua seu cadastro para liberar saques.',
  'Sua biometria esta em analise.',
  'Nova campanha disponivel em breve.',
]

export function LoggedAppShell({
  collapsed,
  activeMainItemId,
  showFirstAccessModal,
  showProfileMenu,
  onLogoClick,
  onToggleSidebar,
  onToggleProfileMenu,
  onCloseProfileMenu,
  onMainNavigationSelect,
  onOpenNewOperation,
  onCloseFirstAccessModal,
  onConcludeRegistration,
  onOpenMyAccount,
  onBackToLogin,
  children,
}: LoggedAppShellProps) {
  const [showNotifications, setShowNotifications] = useState(false)

  const closeFloatingMenus = () => {
    if (showProfileMenu) {
      onCloseProfileMenu()
    }

    if (showNotifications) {
      setShowNotifications(false)
    }
  }

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
          onLogoClick={onLogoClick}
          onToggleSidebar={onToggleSidebar}
          onNewOperation={onOpenNewOperation}
          onToggleNotifications={() =>
            setShowNotifications((current) => !current)
          }
          onToggleProfileMenu={() => {
            if (showNotifications) {
              setShowNotifications(false)
            }

            onToggleProfileMenu()
          }}
        />

        {showNotifications ? (
          <Box
            sx={{
              position: 'absolute',
              top: 62,
              right: showProfileMenu ? 312 : 108,
              width: 320,
              bgcolor: '#FFFFFF',
              border: '1px solid #E8ECF2',
              borderRadius: '8px',
              boxShadow: '0 18px 34px rgba(15, 23, 42, 0.12)',
              overflow: 'hidden',
              zIndex: 30,
            }}
          >
            <Box sx={{ px: 2, py: 1.7 }}>
              <Typography
                sx={{ fontSize: '1rem', fontWeight: 700, color: '#20212A' }}
              >
                Notificacoes
              </Typography>
            </Box>
            <Divider />
            <List disablePadding>
              {notifications.map((message, index) => (
                <Box key={message}>
                  <ListItem sx={{ py: 1.5, px: 2 }}>
                    <Typography
                      sx={{
                        fontSize: '0.96rem',
                        color: '#41536A',
                        lineHeight: 1.4,
                      }}
                    >
                      {message}
                    </Typography>
                  </ListItem>
                  {index < notifications.length - 1 ? <Divider /> : null}
                </Box>
              ))}
            </List>
          </Box>
        ) : null}

        <UserProfileMenu
          open={showProfileMenu}
          user={appUserProfile}
          onOpenMyAccount={onOpenMyAccount}
          onLogout={onBackToLogin}
        />
      </Box>

      <Box sx={{ display: 'flex', minHeight: 0 }}>
        <MainSidebar
          collapsed={collapsed}
          activeItemId={activeMainItemId}
          onSelectItem={onMainNavigationSelect}
        />
        <Box
          component="main"
          onClick={closeFloatingMenus}
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
