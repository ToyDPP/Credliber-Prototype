import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import { CompleteRegistrationField } from './CompleteRegistrationField'
import { CompleteRegistrationStepper } from './CompleteRegistrationStepper'
import { SecurityNote } from './SecurityNote'
import type { CompleteRegistrationBankState } from '../../types/prototype'

interface BankDataStepProps {
  state: CompleteRegistrationBankState
  onContinue: () => void
}

export function BankDataStep({ state, onContinue }: BankDataStepProps) {
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
          Dados Bancários
        </Typography>
        <Typography sx={{ color: '#53627A', fontSize: '1.15rem' }}>
          Informe sua conta bancária para recebimento das comissões.
        </Typography>
      </Stack>

      <CompleteRegistrationStepper currentStep={2} />

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
              bgcolor: 'rgba(59, 130, 246, 0.12)',
              color: '#0B6BCE',
              flexShrink: 0,
            }}
          >
            <AccountBalanceRoundedIcon />
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#303644' }}
            >
              Dados Bancários
            </Typography>
            <Typography sx={{ fontSize: '1rem', color: '#53627A' }}>
              Informe sua conta para recebimento das comissões.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CompleteRegistrationField label="Banco" field={state.bank} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CompleteRegistrationField
              label="Tipo de conta"
              field={state.accountType}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CompleteRegistrationField label="Agência" field={state.branch} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CompleteRegistrationField label="Conta" field={state.account} />
          </Grid>
        </Grid>

        <Stack
          component="ul"
          spacing={0.6}
          sx={{ mt: 2.2, pl: 2.1, color: '#53627A' }}
        >
          <Typography component="li" sx={{ fontSize: '0.98rem' }}>
            A conta bancária deve estar no nome e CPF do titular do cadastro.
          </Typography>
          <Typography component="li" sx={{ fontSize: '0.98rem' }}>
            Alterações nos dados bancários podem ser feitas apenas das 8h às 18h,
            em horário comercial.
          </Typography>
          <Typography component="li" sx={{ fontSize: '0.98rem' }}>
            Após alterar a conta bancária, será necessário confirmar a mudança por
            e-mail ou WhatsApp.
          </Typography>
        </Stack>
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

        <SecurityNote text="Essas informações são utilizadas exclusivamente para processar seus recebimentos com segurança." />
      </Stack>
    </Stack>
  )
}
