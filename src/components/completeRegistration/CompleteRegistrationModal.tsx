import { Box, Modal, Stack } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import type { ReactNode } from 'react'

interface CompleteRegistrationModalProps {
  open: boolean
  onClose: () => void
  onBack?: () => void
  compact?: boolean
  children: ReactNode
}

export function CompleteRegistrationModal({
  open,
  onClose,
  onBack,
  compact = false,
  children,
}: CompleteRegistrationModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        onClick={onClose}
        sx={{
          position: 'fixed',
          inset: 0,
          bgcolor: 'rgba(15, 23, 42, 0.36)',
          display: 'grid',
          placeItems: 'center',
          p: { xs: 2, md: 3 },
          zIndex: 1400,
        }}
      >
        <Box
          onClick={(event) => event.stopPropagation()}
          sx={{
            width: '100%',
            maxWidth: compact ? 608 : 1100,
            maxHeight: 'calc(100vh - 32px)',
            overflowY: 'auto',
            bgcolor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 28px 60px rgba(15, 23, 42, 0.24)',
            px: { xs: 2.5, sm: 4, md: 6 },
            py: { xs: 2.5, sm: 4, md: 4.5 },
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: { xs: 2.5, md: 1.5 },
            }}
          >
            <Box
              onClick={onBack}
              sx={{
                width: 56,
                height: 56,
                display: onBack ? 'grid' : 'none',
                placeItems: 'center',
                borderRadius: '8px',
                bgcolor: 'rgba(242, 10, 91, 0.10)',
                color: '#F20A5B',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <ArrowBackRoundedIcon sx={{ fontSize: 28 }} />
            </Box>

            {!onBack ? <Box sx={{ width: 56, height: 56 }} /> : null}

            <Box
              onClick={onClose}
              sx={{
                width: 56,
                height: 56,
                display: 'grid',
                placeItems: 'center',
                borderRadius: '8px',
                bgcolor: 'rgba(242, 10, 91, 0.10)',
                color: '#F20A5B',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <CloseRoundedIcon sx={{ fontSize: 28 }} />
            </Box>
          </Stack>

          {children}
        </Box>
      </Box>
    </Modal>
  )
}
