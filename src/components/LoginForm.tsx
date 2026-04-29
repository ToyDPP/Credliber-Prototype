import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import type { LoginPrototypeState } from '../types/prototype'

interface LoginFormProps {
  state: LoginPrototypeState
  onTogglePasswordVisibility: () => void
  onToggleRememberMe: () => void
  onSubmit: () => void
  onCreateAccount: () => void
  onForgotPassword: () => void
}

export function LoginForm({
  state,
  onTogglePasswordVisibility,
  onToggleRememberMe,
  onSubmit,
  onCreateAccount,
  onForgotPassword,
}: LoginFormProps) {
  const passwordIcon = state.passwordVisible ? (
    <VisibilityRoundedIcon />
  ) : (
    <VisibilityOffRoundedIcon />
  )

  return (
    <Stack spacing={3.25} sx={{ width: '100%' }}>
      <Stack spacing={1.15} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.2rem', sm: '2.9rem' },
          }}
        >
          Entre na sua conta
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: 380, mx: 'auto' }}
        >
          Acesse sua conta com e-mail ou CPF.
        </Typography>
      </Stack>

      <Stack spacing={2.1}>
        <TextField
          label="E-mail ou CPF"
          placeholder="Digite seu e-mail ou CPF"
          value={state.email.value}
          error={Boolean(state.email.error)}
          helperText={state.email.error ?? ' '}
          disabled={state.loading}
          fullWidth
          slotProps={{
            inputLabel: { shrink: true },
            htmlInput: { readOnly: true },
            input: {
              endAdornment: state.email.showAlertIcon ? (
                <InputAdornment position="end">
                  <ErrorRoundedIcon color="error" />
                </InputAdornment>
              ) : undefined,
            },
          }}
        />

        <TextField
          label="Senha"
          placeholder="Digite sua senha"
          value={state.password.value}
          type={state.passwordVisible ? 'text' : 'password'}
          error={Boolean(state.password.error)}
          helperText={state.password.error ?? ' '}
          disabled={state.loading}
          fullWidth
          slotProps={{
            inputLabel: { shrink: true },
            htmlInput: { readOnly: true },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      state.passwordVisible ? 'Ocultar senha' : 'Mostrar senha'
                    }
                    edge="end"
                    onClick={onTogglePasswordVisibility}
                    disabled={state.loading}
                    sx={{
                      color: state.password.error
                        ? 'error.main'
                        : 'text.secondary',
                    }}
                  >
                    {passwordIcon}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>

      <Stack spacing={2.1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.rememberMe}
              onChange={onToggleRememberMe}
              disabled={state.loading}
              icon={<CheckBoxOutlineBlankRoundedIcon />}
              checkedIcon={<CheckBoxRoundedIcon />}
            />
          }
          label="Manter-me conectado"
          sx={{
            alignItems: 'center',
            gap: 1.4,
            m: 0,
            color: 'text.secondary',
            '& .MuiTypography-root': {
              fontSize: '1rem',
            },
          }}
        />

        {state.generalError ? (
          <Alert severity="error">{state.generalError}</Alert>
        ) : null}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={state.loading}
          onClick={onSubmit}
          endIcon={!state.loading ? <ArrowForwardRoundedIcon /> : undefined}
        >
          {state.loading ? (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
              }}
            >
              <CircularProgress size={18} thickness={4.6} color="inherit" />
              <span>Entrando...</span>
            </Box>
          ) : (
            'Entrar'
          )}
        </Button>

        <Link
          component="button"
          type="button"
          underline="none"
          color="primary"
          onClick={onForgotPassword}
          sx={{
            alignSelf: 'center',
            fontSize: '1rem',
            fontWeight: 500,
            opacity: state.loading ? 0.56 : 1,
            pointerEvents: state.loading ? 'none' : 'auto',
          }}
        >
          Esqueceu sua senha?
        </Link>
      </Stack>

      <Stack spacing={2.2}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, height: 1, bgcolor: 'divider' }} />
          <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
            ou
          </Typography>
          <Box sx={{ flex: 1, height: 1, bgcolor: 'divider' }} />
        </Box>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          disabled={state.loading}
          onClick={onCreateAccount}
        >
          Cadastre-se agora
        </Button>
      </Stack>
    </Stack>
  )
}
