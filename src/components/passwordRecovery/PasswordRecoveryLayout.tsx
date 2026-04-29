import { Box, useMediaQuery, useTheme } from '@mui/material'
import type { ReactNode } from 'react'
import { CredliberLogo } from '../CredliberLogo'
import { DottedBackground } from '../DottedBackground'

interface PasswordRecoveryLayoutProps {
  children: ReactNode
  formMaxWidth?: number
}

export function PasswordRecoveryLayout({
  children,
  formMaxWidth = 430,
}: PasswordRecoveryLayoutProps) {
  const theme = useTheme()
  const isTabletDown = useMediaQuery(theme.breakpoints.down('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', inset: 0 }}>
          <DottedBackground />
        </Box>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
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
            maxWidth: isMobile ? Math.min(formMaxWidth, 400) : formMaxWidth,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
