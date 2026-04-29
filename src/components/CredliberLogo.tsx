import { Box, Typography } from '@mui/material'

interface CredliberLogoProps {
  compact?: boolean
}

export function CredliberLogo({ compact = false }: CredliberLogoProps) {
  const iconSize = compact ? 58 : 76

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? 1.5 : 2.2,
      }}
    >
      <Box
        sx={{
          width: iconSize,
          height: iconSize,
          borderRadius: `${Math.round(iconSize * 0.24)}px`,
          background: 'linear-gradient(145deg, #FF1A72 0%, #F20A5B 100%)',
          boxShadow: '0 18px 34px rgba(242, 10, 91, 0.22)',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: compact ? '11px 12px 12px 10px' : '14px 15px 14px 12px',
            borderRadius: '50%',
            border: '4px solid #FFFFFF',
            borderRightColor: 'transparent',
            transform: 'rotate(-22deg)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: compact ? 11 : 14,
            right: compact ? 8 : 10,
            width: compact ? 20 : 24,
            height: compact ? 12 : 14,
            borderTop: '4px solid #FFFFFF',
            borderLeft: '4px solid #FFFFFF',
            borderRadius: '18px 0 0 0',
            transform: 'rotate(14deg)',
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: compact
            ? { xs: '2rem', sm: '2.4rem' }
            : { md: '4.7rem', lg: '5.35rem' },
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: '-0.065em',
          color: 'text.primary',
        }}
      >
        Credliber
      </Typography>
    </Box>
  )
}
