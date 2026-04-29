import { Box, Button, Stack } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import type { RegistrationStepOneState } from '../../types/prototype'
import { RegistrationField } from './RegistrationField'
import { RegistrationLayout } from './RegistrationLayout'

interface RegistrationStepOneProps {
  state: RegistrationStepOneState
  onBack: () => void
  onContinue: () => void
}

export function RegistrationStepOne({
  state,
  onBack,
  onContinue,
}: RegistrationStepOneProps) {
  return (
    <RegistrationLayout
      title="Vamos começar pelos seus dados"
      subtitle="Usamos essas informações para criar sua conta e validar seu cadastro com segurança."
      progress={0.11}
      onBack={onBack}
    >
      <Stack spacing={1.15}>
        <RegistrationField
          label="CPF"
          value={state.cpf.value}
          placeholder={state.cpf.placeholder}
          error={state.cpf.error}
          showAlertIcon={state.cpf.showAlertIcon}
        />
        <RegistrationField
          label="Nome completo"
          value={state.fullName.value}
          placeholder={state.fullName.placeholder}
          error={state.fullName.error}
          showAlertIcon={state.fullName.showAlertIcon}
        />
        <RegistrationField
          label="Data de nascimento"
          value={state.birthDate.value}
          placeholder={state.birthDate.placeholder}
          error={state.birthDate.error}
          showAlertIcon={state.birthDate.showAlertIcon}
        />
        <RegistrationField
          label="E-mail"
          value={state.email.value}
          placeholder={state.email.placeholder}
          error={state.email.error}
          showAlertIcon={state.email.showAlertIcon}
        />
        <RegistrationField
          label="WhatsApp"
          value={state.whatsapp.value}
          placeholder={state.whatsapp.placeholder}
          error={state.whatsapp.error}
          showAlertIcon={state.whatsapp.showAlertIcon}
        />
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={onContinue}
          sx={{ width: { xs: '100%', sm: 464 }, maxWidth: '100%' }}
        >
          Continuar
        </Button>
      </Box>
    </RegistrationLayout>
  )
}
