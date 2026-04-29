import { Box } from '@mui/material'

interface ProgressBarProps {
  value: number
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 8,
        borderRadius: 999,
        bgcolor: 'rgba(242, 10, 91, 0.12)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: `${Math.max(0, Math.min(value, 1)) * 100}%`,
          height: '100%',
          borderRadius: 999,
          background: 'linear-gradient(90deg, #F20A5B 0%, #FF126B 100%)',
        }}
      />
    </Box>
  )
}
