import {
  Alert,
  Box,
  Button,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import type { RegistrationSuccessState } from '../../types/prototype'
import { RegistrationLayout } from './RegistrationLayout'

interface RegistrationSuccessProps {
  state: RegistrationSuccessState
  onGoToLogin: () => void
  onConfirmEmail: () => void
}

export function RegistrationSuccess({
  state,
  onGoToLogin,
  onConfirmEmail,
}: RegistrationSuccessProps) {
  return (
    <RegistrationLayout
      title="Cadastro realizado com sucesso!"
      subtitle="Enviamos um e-mail para confirmar sua conta. Clique no link enviado e ative sua conta."
      contentMaxWidth={940}
      showBackButton={false}
      centerContent
    >
      <Stack spacing={4.5} sx={{ maxWidth: 760, mx: 'auto', width: '100%' }}>
        <Box sx={{ height: 1, bgcolor: 'rgba(184, 195, 211, 0.34)' }} />

        <Alert
          sx={{
            borderRadius: '8px',
            px: 2.4,
            py: 2.1,
            bgcolor: 'rgba(242, 10, 91, 0.08)',
            borderColor: 'rgba(242, 10, 91, 0.82)',
          }}
        >
          <Stack spacing={0.6}>
            <Typography sx={{ color: 'primary.main', fontWeight: 700 }}>
              Não encontrou o e-mail?
            </Typography>
            <Typography sx={{ color: 'primary.main', fontSize: '1rem' }}>
              Verifique sua caixa de spam ou lixo eletrônico. O envio pode levar
              alguns minutos.
            </Typography>
          </Stack>
        </Alert>

        <Stack spacing={1.2} sx={{ alignItems: 'center' }}>
          <Button
            variant="text"
            color="inherit"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              minHeight: 0,
              px: 0,
              color: 'text.secondary',
              fontSize: '1.1rem',
              fontWeight: 700,
            }}
          >
            Reenviar e-mail de confirmação
          </Button>

          <Stack direction="row" spacing={1.4} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '8px',
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'rgba(242, 10, 91, 0.12)',
                color: 'primary.main',
              }}
            >
              <AccessTimeRoundedIcon fontSize="small" />
            </Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
              <Typography sx={{ color: 'text.primary', fontSize: '1rem' }}>
                Você poderá reenviar em:
              </Typography>
              <Typography
                sx={{
                  color: 'primary.main',
                  fontSize: '2rem',
                  lineHeight: 1,
                  fontWeight: 800,
                }}
              >
                {state.countdown}
              </Typography>
            </Stack>
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
          Após confirmar seu e-mail, você poderá acessar o sistema e concluir a
          validação do cadastro.
        </Typography>

        <Stack spacing={1.4} sx={{ alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={onGoToLogin}
            sx={{ minWidth: 176 }}
          >
            Realizar login
          </Button>

          <Link
            component="button"
            type="button"
            underline="hover"
            color="text.secondary"
            onClick={onConfirmEmail}
            sx={{ fontSize: '0.98rem' }}
          >
            Simular clique no link do e-mail
          </Link>
        </Stack>
      </Stack>
    </RegistrationLayout>
  )
}
