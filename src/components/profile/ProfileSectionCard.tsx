import { Box, Divider, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface ProfileSectionCardProps {
  title: string
  children: ReactNode
}

export function ProfileSectionCard({
  title,
  children,
}: ProfileSectionCardProps) {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        border: '1px solid #E8ECF2',
        borderRadius: '8px',
        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
        p: 2,
      }}
    >
      <Stack spacing={1.2}>
        <Typography
          sx={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#20212A',
          }}
        >
          {title}
        </Typography>
        <Divider sx={{ borderColor: '#EEF2F6' }} />
        {children}
      </Stack>
    </Box>
  )
}
