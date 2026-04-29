import { Box } from '@mui/material'

const dotPattern =
  'radial-gradient(circle, rgba(171, 188, 210, 0.82) 0 1.6px, transparent 1.7px)'

export function DottedBackground() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: dotPattern,
          backgroundSize: '28px 28px',
          opacity: 0.16,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '-18%',
          top: '-6%',
          width: '58%',
          height: '108%',
          backgroundImage: dotPattern,
          backgroundSize: '18px 18px',
          opacity: 0.5,
          borderRadius: '12px',
          transform: 'rotate(14deg)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '22%',
          top: '18%',
          width: '48%',
          height: '44%',
          backgroundImage: dotPattern,
          backgroundSize: '18px 18px',
          opacity: 0.36,
          borderRadius: '12px',
          filter: 'blur(0.15px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: '10%',
          top: '8%',
          width: '30%',
          height: '12%',
          backgroundImage: dotPattern,
          backgroundSize: '16px 16px',
          opacity: 0.22,
          borderRadius: '12px',
          transform: 'rotate(-10deg)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: '-6%',
          bottom: '-14%',
          width: '56%',
          height: '44%',
          backgroundImage: dotPattern,
          backgroundSize: '20px 20px',
          opacity: 0.3,
          borderRadius: '12px',
          transform: 'rotate(18deg)',
        }}
      />
    </Box>
  )
}
