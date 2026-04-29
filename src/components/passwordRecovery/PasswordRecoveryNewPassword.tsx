import { useEffect, useState } from 'react'
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import type { PasswordRecoveryNewPasswordState } from '../../types/prototype'
import { RegistrationField } from '../registration/RegistrationField'
import { PasswordChecklist } from '../registration/PasswordChecklist'
import { PasswordRecoveryLayout } from './PasswordRecoveryLayout'
import { SuccessToast } from './SuccessToast'

interface PasswordRecoveryNewPasswordProps {
  state: PasswordRecoveryNewPasswordState
  onSubmit: () => void
  onAutoRedirectToLogin: () => void
}

export function PasswordRecoveryNewPassword({
  state,
  onSubmit,
  onAutoRedirectToLogin,
}: PasswordRecoveryNewPasswordProps) {
  const [passwordVisible, setPasswordVisible] = useState(state.passwordVisible)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(
    state.confirmPasswordVisible,
  )

  useEffect(() => {
    if (state.stateKey !== 'valid') {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      onAutoRedirectToLogin()
    }, 2600)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [state.stateKey, onAutoRedirectToLogin])

  return (
    <PasswordRecoveryLayout>
      <Stack spacing={2.4}>
        {state.stateKey === 'valid' ? (
          <SuccessToast message="Senha alterada com sucesso" />
        ) : null}

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', sm: '2.9rem' } }}>
            Crie uma nova senha
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 360, mx: 'auto' }}
          >
            Escolha uma senha forte para proteger sua conta.
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <RegistrationField
            label="Nova senha"
            value={state.password.value}
            placeholder={state.password.placeholder}
            error={state.password.error}
            showAlertIcon={state.password.showAlertIcon}
            type={passwordVisible ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setPasswordVisible((current) => !current)}
                  sx={{
                    color: state.password.error ? 'error.main' : 'text.secondary',
                  }}
                >
                  {passwordVisible ? (
                    <VisibilityRoundedIcon />
                  ) : (
                    <VisibilityOffRoundedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <RegistrationField
            label="Confirmar nova senha"
            value={state.confirmPassword.value}
            placeholder={state.confirmPassword.placeholder}
            error={state.confirmPassword.error}
            showAlertIcon={state.confirmPassword.showAlertIcon}
            type={confirmPasswordVisible ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setConfirmPasswordVisible((current) => !current)
                  }
                  sx={{
                    color: state.confirmPassword.error
                      ? 'error.main'
                      : 'text.secondary',
                  }}
                >
                  {confirmPasswordVisible ? (
                    <VisibilityRoundedIcon />
                  ) : (
                    <VisibilityOffRoundedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </Stack>

        <PasswordChecklist items={state.checklist} />

        <Button variant="contained" color="primary" fullWidth onClick={onSubmit}>
          Alterar senha
        </Button>
      </Stack>
    </PasswordRecoveryLayout>
  )
}
