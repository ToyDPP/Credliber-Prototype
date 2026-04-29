import { useState } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { CredliberLogo } from './CredliberLogo'
import { LoginForm } from './LoginForm'
import type { LoginPrototypeState } from '../types/prototype'

interface LoginScreenProps {
  state: LoginPrototypeState
  onCreateAccount: () => void
}

export function LoginScreen({ state, onCreateAccount }: LoginScreenProps) {
  const theme = useTheme()
  const isTabletDown = useMediaQuery(theme.breakpoints.down('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [passwordVisible, setPasswordVisible] = useState(state.passwordVisible)
  const [rememberMe, setRememberMe] = useState(state.rememberMe)

  const renderedState: LoginPrototypeState = {
    ...state,
    passwordVisible,
    rememberMe,
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        bgcolor: '#F3F7FA',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: 'auto', md: '100vh' },
          px: { xs: 3, sm: 5, md: 7, lg: 10 },
          pt: { xs: 14, sm: 15, md: 0 },
          pb: { xs: 4, sm: 3, md: 0 },
          backgroundColor: { xs: '#F3F7FA', md: '#F7FAFD' },
          borderRight: {
            xs: 'none',
            md: '1px solid rgba(184, 195, 211, 0.24)',
          },
        }}
      >
        <Box
          sx={{
            transform: isTabletDown ? 'none' : { md: 'scale(0.82)', lg: 'scale(1)' },
            transformOrigin: 'center',
          }}
        >
          <CredliberLogo compact={isTabletDown} tone="dark" />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: 'auto', md: '100vh' },
          px: { xs: 3, sm: 5, md: 6, lg: 8 },
          pb: { xs: 8, sm: 10, md: 0 },
          pt: { xs: 0, md: 0 },
          backgroundColor: { xs: '#F3F7FA', md: '#FFFFFF' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: isMobile ? 400 : 430,
          }}
        >
          <LoginForm
            state={renderedState}
            onTogglePasswordVisibility={() => {
              if (!state.loading) {
                setPasswordVisible((current) => !current)
              }
            }}
            onToggleRememberMe={() => {
              if (!state.loading) {
                setRememberMe((current) => !current)
              }
            }}
            onCreateAccount={onCreateAccount}
          />
        </Box>
      </Box>
    </Box>
  )
}
