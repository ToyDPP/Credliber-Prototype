import { Box, Button, Stack, Typography } from '@mui/material'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { RegistrationLayout } from './RegistrationLayout'

interface EmailConfirmedProps {
  onGoToLogin: () => void
}

export function EmailConfirmed({ onGoToLogin }: EmailConfirmedProps) {
  return (
    <RegistrationLayout
      title=""
      subtitle=""
      contentMaxWidth={940}
      showBackButton={false}
      showHeader={false}
      centerContent
    >
      <Stack spacing={4.5} sx={{ maxWidth: 760, mx: 'auto', width: '100%' }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: { xs: 'center', sm: 'left' },
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '8px',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'rgba(34, 197, 94, 0.12)',
              color: '#15803D',
              flexShrink: 0,
            }}
          >
            <CheckCircleOutlineRoundedIcon />
          </Box>

          <Stack spacing={0.3}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.65rem' },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              E-mail confirmado com sucesso!
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '1.2rem',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              Seu e-mail foi confirmado e sua conta está pronta para acesso.
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ height: 1, bgcolor: 'rgba(184, 195, 211, 0.34)' }} />

        <Typography
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: '1.15rem',
            lineHeight: 1.7,
          }}
        >
          Agora você já pode realizar login para acessar o sistema.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={onGoToLogin}
            sx={{ minWidth: 176 }}
          >
            Realizar login
          </Button>
        </Box>
      </Stack>
    </RegistrationLayout>
  )
}
