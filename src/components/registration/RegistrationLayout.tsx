import { Box, IconButton, Stack, Typography } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import type { ReactNode } from 'react'
import { DottedBackground } from '../DottedBackground'
import { ProgressBar } from './ProgressBar'

interface RegistrationLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
  progress?: number
  onBack?: () => void
  showBackButton?: boolean
  contentMaxWidth?: number
  showHeader?: boolean
  centerContent?: boolean
}

export function RegistrationLayout({
  title,
  subtitle,
  children,
  progress,
  onBack,
  showBackButton = true,
  contentMaxWidth = 980,
  showHeader = true,
  centerContent = false,
}: RegistrationLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '236px 1fr' },
        bgcolor: '#F3F7FA',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          overflow: 'hidden',
          bgcolor: '#F7FAFD',
        }}
      >
        <DottedBackground />
      </Box>

      <Box
        sx={{
          bgcolor: '#FFFFFF',
          display: 'flex',
          alignItems: centerContent ? 'center' : 'stretch',
          px: { xs: 3, sm: 5, md: 7, lg: 8 },
          py: { xs: 12, sm: 13, md: 6 },
        }}
      >
        <Box sx={{ width: '100%', maxWidth: contentMaxWidth, mx: 'auto' }}>
          {showBackButton && onBack ? (
            <IconButton
              onClick={onBack}
              sx={{
                width: 58,
                height: 58,
                borderRadius: '8px',
                bgcolor: 'rgba(242, 10, 91, 0.1)',
                color: 'primary.main',
                mb: { xs: 4, md: 5 },
                '&:hover': {
                  bgcolor: 'rgba(242, 10, 91, 0.16)',
                },
              }}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
          ) : null}

          <Stack spacing={progress === undefined ? 5 : 4}>
            {showHeader ? (
              <>
                <Stack spacing={1.2} sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2.2rem', md: '3rem' },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ maxWidth: 700, mx: 'auto' }}
                  >
                    {subtitle}
                  </Typography>
                </Stack>

                {progress !== undefined ? <ProgressBar value={progress} /> : null}
              </>
            ) : null}

            {children}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
