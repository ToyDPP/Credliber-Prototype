import { Box, Button, Stack } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import type { RegistrationStepTwoState } from '../../types/prototype'
import { RegistrationField } from './RegistrationField'
import { RegistrationLayout } from './RegistrationLayout'

interface RegistrationStepTwoProps {
  state: RegistrationStepTwoState
  onBack: () => void
  onContinue: () => void
}

export function RegistrationStepTwo({
  state,
  onBack,
  onContinue,
}: RegistrationStepTwoProps) {
  return (
    <RegistrationLayout
      title="Agora, seu endereço"
      subtitle="Esses dados ajudam a concluir sua identificação e manter seu cadastro atualizado."
      progress={0.5}
      onBack={onBack}
    >
      <Stack spacing={1.1}>
        <RegistrationField
          label="CEP"
          value={state.cep.value}
          placeholder={state.cep.placeholder}
          error={state.cep.error}
          showAlertIcon={state.cep.showAlertIcon}
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <RegistrationField
            label="Estado (UF)"
            value={state.state.value}
            placeholder={state.state.placeholder}
            error={state.state.error}
            selectLike={state.state.selectLike}
          />
          <RegistrationField
            label="Cidade"
            value={state.city.value}
            placeholder={state.city.placeholder}
            error={state.city.error}
            selectLike={state.city.selectLike}
          />
        </Box>

        <RegistrationField
          label="Bairro"
          value={state.neighborhood.value}
          placeholder={state.neighborhood.placeholder}
          error={state.neighborhood.error}
          showAlertIcon={state.neighborhood.showAlertIcon}
        />
        <RegistrationField
          label="Endereço"
          value={state.address.value}
          placeholder={state.address.placeholder}
          error={state.address.error}
          showAlertIcon={state.address.showAlertIcon}
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <RegistrationField
            label="Número"
            value={state.number.value}
            placeholder={state.number.placeholder}
            error={state.number.error}
            showAlertIcon={state.number.showAlertIcon}
          />
          <RegistrationField
            label="Complemento"
            value={state.complement.value}
            placeholder={state.complement.placeholder}
            error={state.complement.error}
          />
        </Box>
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
