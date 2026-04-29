import { useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from '@mui/material'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import type { RegistrationStepThreeState } from '../../types/prototype'
import { PasswordChecklist } from './PasswordChecklist'
import { RegistrationField } from './RegistrationField'
import { RegistrationLayout } from './RegistrationLayout'

interface RegistrationStepThreeProps {
  state: RegistrationStepThreeState
  onBack: () => void
  onComplete: () => void
}

export function RegistrationStepThree({
  state,
  onBack,
  onComplete,
}: RegistrationStepThreeProps) {
  const [passwordVisible, setPasswordVisible] = useState(state.passwordVisible)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(
    state.confirmPasswordVisible,
  )

  return (
    <RegistrationLayout
      title="Crie sua senha"
      subtitle="Ela será usada para acessar sua conta com segurança."
      progress={0.91}
      onBack={onBack}
    >
      <Stack spacing={1.15}>
        <RegistrationField
          label="Senha"
          value={state.password.value}
          placeholder={state.password.placeholder}
          error={state.password.error}
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
          label="Confirmar senha"
          value={state.confirmPassword.value}
          placeholder={state.confirmPassword.placeholder}
          error={state.confirmPassword.error}
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

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onComplete}
          sx={{ width: { xs: '100%', sm: 464 }, maxWidth: '100%' }}
        >
          Finalizar cadastro
        </Button>
      </Box>
    </RegistrationLayout>
  )
}
