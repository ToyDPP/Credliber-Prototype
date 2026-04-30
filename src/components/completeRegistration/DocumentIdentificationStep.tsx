import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import { CompleteRegistrationField } from './CompleteRegistrationField'
import { CompleteRegistrationStepper } from './CompleteRegistrationStepper'
import { SecurityNote } from './SecurityNote'
import type { CompleteRegistrationDocumentState } from '../../types/prototype'

interface DocumentIdentificationStepProps {
  state: CompleteRegistrationDocumentState
  onContinue: () => void
}

export function DocumentIdentificationStep({
  state,
  onContinue,
}: DocumentIdentificationStepProps) {
  return (
    <Stack spacing={3.2}>
      <Stack spacing={0.8} sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { xs: '2.2rem', md: '2.9rem' },
            fontWeight: 800,
            letterSpacing: '-0.04em',
          }}
        >
          Documento de Identificação
        </Typography>
        <Typography sx={{ color: '#53627A', fontSize: '1.15rem' }}>
          Informe os dados do seu documento oficial.
        </Typography>
      </Stack>

      <CompleteRegistrationStepper currentStep={1} />

      <Box
        sx={{
          border: '1px solid #E8ECF2',
          borderRadius: '8px',
          boxShadow: '0 18px 28px rgba(15, 23, 42, 0.06)',
          p: { xs: 2, md: 2.5 },
        }}
      >
        <Stack
          direction="row"
          spacing={1.2}
          sx={{ mb: 2.3, alignItems: 'center' }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '8px',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'rgba(242, 10, 91, 0.10)',
              color: '#F20A5B',
              flexShrink: 0,
            }}
          >
            <DescriptionOutlinedIcon />
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#303644' }}
            >
              Documento de Identificação
            </Typography>
            <Typography sx={{ fontSize: '1rem', color: '#53627A' }}>
              Informe os dados do seu documento oficial com foto.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CompleteRegistrationField
              label="Tipo de documento"
              field={state.documentType}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CompleteRegistrationField
              label="Número do documento"
              field={state.documentNumber}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CompleteRegistrationField
              label="Órgão emissor"
              field={state.issuingAgency}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CompleteRegistrationField
              label="UF de emissão"
              field={state.issuingState}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CompleteRegistrationField
              label="Data de emissão"
              field={state.issueDate}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CompleteRegistrationField
              label="Data de validade"
              field={state.expiryDate}
            />
          </Grid>
        </Grid>
      </Box>

      <Stack spacing={2.2}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={onContinue}
            sx={{
              width: { xs: '100%', md: 480 },
              minHeight: 52,
              borderRadius: '8px',
            }}
          >
            Continuar
          </Button>
        </Box>

        <SecurityNote text="Seus dados são protegidos com criptografia e usados apenas para validação cadastral." />
      </Stack>
    </Stack>
  )
}
