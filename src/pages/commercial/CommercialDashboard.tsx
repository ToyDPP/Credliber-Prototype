import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import { CompleteRegistrationBanner } from '../../components/appShell/CompleteRegistrationBanner'
import { DashboardBreadcrumb } from '../../components/appShell/DashboardBreadcrumb'
import { LoggedAppShell } from '../../components/appShell/LoggedAppShell'
import type { CommercialDashboardState } from '../../types/prototype'

interface CommercialDashboardProps {
  state: CommercialDashboardState
  onBackToLogin: () => void
}

export function CommercialDashboard({
  state,
  onBackToLogin,
}: CommercialDashboardProps) {
  const [collapsed, setCollapsed] = useState(state.collapsed)
  const [showFirstAccessModal, setShowFirstAccessModal] = useState(
    state.showFirstAccessModal,
  )
  const [showProfileMenu, setShowProfileMenu] = useState(state.showProfileMenu)

  const handleConcludeRegistration = () => {
    setShowFirstAccessModal(true)
    window.console.log('Ir para etapa 2 do cadastro')
  }

  return (
    <LoggedAppShell
      collapsed={collapsed}
      showFirstAccessModal={showFirstAccessModal}
      showProfileMenu={showProfileMenu}
      onToggleSidebar={() => setCollapsed((current) => !current)}
      onToggleProfileMenu={() => setShowProfileMenu((current) => !current)}
      onCloseProfileMenu={() => setShowProfileMenu(false)}
      onCloseFirstAccessModal={() => setShowFirstAccessModal(false)}
      onConcludeRegistration={handleConcludeRegistration}
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
          <CompleteRegistrationBanner onClick={handleConcludeRegistration} />
        ) : null}

        <DashboardBreadcrumb />

        <Box
          sx={{
            minHeight: 420,
            borderRadius: 0,
            background:
              state.showBanner
                ? 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,1) 72%)'
                : 'transparent',
          }}
        />
      </Stack>
    </LoggedAppShell>
  )
}
