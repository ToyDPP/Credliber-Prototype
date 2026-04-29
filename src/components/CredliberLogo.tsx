import { Box } from '@mui/material'
import logoCredliberDark from '../assets/brand/logo-credliber-dark.svg'
import logoCredliberLight from '../assets/brand/logo-credliber-light.svg'
import simboloCredliber from '../assets/brand/simbolo-credliber.svg'

interface CredliberLogoProps {
  compact?: boolean
  symbolOnly?: boolean
  tone?: 'dark' | 'light'
}

export function CredliberLogo({
  compact = false,
  symbolOnly = false,
  tone = 'dark',
}: CredliberLogoProps) {
  const symbolWidth = compact ? 38 : 56
  const logoWidth = compact
    ? { xs: 220, sm: 250 }
    : { xs: 310, sm: 360, md: 420, lg: 480 }

  const src = symbolOnly
    ? simboloCredliber
    : tone === 'light'
      ? logoCredliberLight
      : logoCredliberDark

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src={src}
        alt="Credliber"
        sx={{
          display: 'block',
          width: symbolOnly ? symbolWidth : logoWidth,
          maxWidth: '100%',
          height: 'auto',
          flexShrink: 0,
        }}
      />
    </Box>
  )
}
