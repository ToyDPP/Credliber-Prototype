import { Box, Button, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface PlaceholderPageProps {
  title: string
  description: string
  icon: ReactNode
  actionLabel?: string
  onAction?: () => void
}

export function PlaceholderPage({
  title,
  description,
  icon,
  actionLabel,
  onAction,
}: PlaceholderPageProps) {
  return (
    <Box
      sx={{
        minHeight: 420,
        display: 'grid',
        placeItems: 'center',
        py: { xs: 4, md: 6 },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: '100%',
          maxWidth: 620,
          textAlign: 'center',
          bgcolor: '#FFFFFF',
          border: '1px solid #E8ECF2',
          borderRadius: '8px',
          boxShadow: '0 12px 28px rgba(15, 23, 42, 0.05)',
          px: { xs: 2.5, md: 4 },
          py: { xs: 4, md: 5 },
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            display: 'grid',
            placeItems: 'center',
            mx: 'auto',
            borderRadius: '8px',
            bgcolor: 'rgba(242, 10, 91, 0.10)',
            color: '#F20A5B',
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 800, color: '#20212A' }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            maxWidth: 440,
            mx: 'auto',
            fontSize: '1rem',
            lineHeight: 1.5,
            color: '#53627A',
          }}
        >
          {description}
        </Typography>

        {actionLabel ? (
          <Button
            variant="contained"
            onClick={onAction}
            sx={{
              minHeight: 44,
              alignSelf: 'center',
              px: 3,
              borderRadius: '8px',
            }}
          >
            {actionLabel}
          </Button>
        ) : null}
      </Stack>
    </Box>
  )
}
