import { useState } from 'react'
import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import type {
  PasswordRecoveryRequestState,
  RecoveryChannel,
} from '../../types/prototype'
import { RegistrationField } from '../registration/RegistrationField'
import { PasswordRecoveryLayout } from './PasswordRecoveryLayout'
import { RecoveryChannelOptions } from './RecoveryChannelOptions'

interface PasswordRecoveryRequestProps {
  state: PasswordRecoveryRequestState
  onSubmit: (channel: RecoveryChannel) => void
  onGoToLogin: () => void
  onContactSupport: () => void
}

export function PasswordRecoveryRequest({
  state,
  onSubmit,
  onGoToLogin,
  onContactSupport,
}: PasswordRecoveryRequestProps) {
  const [selectedChannel, setSelectedChannel] = useState<RecoveryChannel>(
    state.selectedChannel,
  )

  if (state.stateKey === 'blocked') {
    return (
      <PasswordRecoveryLayout>
        <Stack spacing={3.1} sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', sm: '2.9rem' } }}>
            Acesso bloqueado
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 390, mx: 'auto' }}
          >
            Seu acesso ao sistema foi bloqueado. Para entender o motivo do
            bloqueio e verificar a possibilidade de desbloqueio, entre em
            contato com o suporte.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={onContactSupport}
            sx={{ mt: 0.4 }}
          >
            Entrar em contato
          </Button>
        </Stack>
      </PasswordRecoveryLayout>
    )
  }

  return (
    <PasswordRecoveryLayout>
      <Stack spacing={3.2}>
        <Stack spacing={1.15} sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', sm: '2.9rem' } }}>
            Recuperar senha
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 400, mx: 'auto' }}
          >
            Informe seu e-mail ou CPF para redefinir sua senha e escolha como
            deseja receber o link para redefinir sua senha.
          </Typography>
        </Stack>

        <RegistrationField
          label="E-mail ou CPF"
          value={state.identifier.value}
          placeholder={state.identifier.placeholder}
          error={state.identifier.error}
          showAlertIcon={state.identifier.showAlertIcon}
        />

        <RecoveryChannelOptions
          value={selectedChannel}
          onChange={setSelectedChannel}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={() => onSubmit(selectedChannel)}
        >
          Enviar
        </Button>

        <Box sx={{ textAlign: 'center' }}>
          <Typography component="span" color="text.secondary">
            Lembrou da sua senha?{' '}
          </Typography>
          <Link
            component="button"
            type="button"
            underline="none"
            color="primary"
            onClick={onGoToLogin}
            sx={{ fontSize: '1rem', fontWeight: 500 }}
          >
            Entrar
          </Link>
        </Box>
      </Stack>
    </PasswordRecoveryLayout>
  )
}
