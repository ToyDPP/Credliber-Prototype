import { Alert, Box } from '@mui/material'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import type { ProfileToastState } from '../../types/prototype'

interface ProfileToastProps {
  toast: ProfileToastState
}

export function ProfileToast({ toast }: ProfileToastProps) {
  const icon =
    toast.type === 'success' ? (
      <CheckCircleOutlineRoundedIcon />
    ) : toast.type === 'warning' ? (
      <WarningAmberRoundedIcon />
    ) : (
      <ErrorOutlineRoundedIcon />
    )

  const colors =
    toast.type === 'success'
      ? {
          bg: 'rgba(34, 197, 94, 0.08)',
          border: '#1D8B4D',
          text: '#1D8B4D',
        }
      : toast.type === 'warning'
        ? {
            bg: 'rgba(245, 158, 11, 0.08)',
            border: '#D99500',
            text: '#B77900',
          }
        : {
            bg: 'rgba(239, 68, 68, 0.10)',
            border: '#D83A52',
            text: '#C4254E',
          }

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 16,
        zIndex: 5,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <Alert
        icon={icon}
        severity={toast.type === 'success' ? 'success' : toast.type === 'warning' ? 'warning' : 'error'}
        sx={{
          minWidth: { xs: '100%', sm: 320 },
          maxWidth: 520,
          borderRadius: '8px',
          border: `1px solid ${colors.border}`,
          bgcolor: colors.bg,
          color: colors.text,
          boxShadow: '0 14px 30px rgba(15, 23, 42, 0.08)',
          '& .MuiAlert-icon': {
            color: colors.text,
          },
        }}
      >
        {toast.message}
      </Alert>
    </Box>
  )
}
