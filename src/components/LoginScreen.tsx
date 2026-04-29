import { useState } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { CredliberLogo } from './CredliberLogo'
import { DottedBackground } from './DottedBackground'
import { LoginForm } from './LoginForm'
import type { LoginPrototypeState } from '../types/prototype'

interface LoginScreenProps {
  state: LoginPrototypeState
}

export function LoginScreen({ state }: LoginScreenProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
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
        p: { xs: 0, md: 3 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: '100vh', md: 'calc(100vh - 48px)' },
          maxWidth: 1500,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
          bgcolor: 'background.paper',
          borderRadius: { xs: 0, md: 4 },
          overflow: 'hidden',
          boxShadow: {
            xs: 'none',
            md: '0 34px 74px rgba(25, 46, 77, 0.12)',
          },
          border: {
            xs: 'none',
            md: '1px solid rgba(184, 195, 211, 0.26)',
          },
        }}
      >
        {!isMobile ? (
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 0,
              backgroundColor: '#F7FAFD',
              px: { md: 6, lg: 9 },
              py: 4,
            }}
          >
            <DottedBackground />
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                transform: {
                  md: 'scale(0.84)',
                  lg: 'scale(1)',
                },
                transformOrigin: 'center',
              }}
            >
              <CredliberLogo />
            </Box>
          </Box>
        ) : null}

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#FFFFFF',
            px: { xs: 3, sm: 5, md: 7, lg: 8 },
            py: { xs: 10, sm: 8, md: 6 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 430,
            }}
          >
            {isMobile ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 5,
                }}
              >
                <CredliberLogo compact />
              </Box>
            ) : null}

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
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
