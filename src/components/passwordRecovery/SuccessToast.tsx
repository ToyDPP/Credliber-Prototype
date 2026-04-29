import { Box, Typography } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { keyframes } from '@mui/material/styles'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

interface SuccessToastProps {
  message: string
}

export function SuccessToast({ message }: SuccessToastProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2.1,
        py: 1.7,
        borderRadius: 2.25,
        border: '1px solid rgba(34, 139, 84, 0.82)',
        bgcolor: 'rgba(231, 246, 236, 0.94)',
        color: '#228B54',
        animation: `${slideIn} 420ms ease forwards`,
        boxShadow: '0 10px 24px rgba(34, 139, 84, 0.08)',
      }}
    >
      <CheckCircleRoundedIcon />
      <Typography sx={{ fontSize: '1.02rem', fontWeight: 700 }}>
        {message}
      </Typography>
    </Box>
  )
}
