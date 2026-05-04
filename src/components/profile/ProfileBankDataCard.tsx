import { Alert, Box, Grid, Stack, Typography } from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import type { ProfileBankDataState } from '../../types/prototype'
import { ProfileTextField } from './ProfileTextField'

interface ProfileBankDataCardProps {
  state: ProfileBankDataState
}

const bulletItems = [
  'A conta bancaria deve estar no nome e CPF do titular do cadastro.',
  'Alteracoes nos dados bancarios podem ser feitas apenas das 8h as 18h, em horario comercial.',
  'Apos alterar a conta bancaria, sera necessario confirmar a mudanca por e-mail ou WhatsApp.',
]

export function ProfileBankDataCard({ state }: ProfileBankDataCardProps) {
  const noticeColors =
    state.notice?.type === 'warning'
      ? {
          border: '#F2B33D',
          bg: 'rgba(245, 158, 11, 0.08)',
          text: '#B77900',
        }
      : {
          border: '#C9D8EA',
          bg: '#F7FAFD',
          text: '#53627A',
        }

  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '8px',
        border: '1px solid #E8ECF2',
        boxShadow: '0 12px 28px rgba(15, 23, 42, 0.05)',
        p: { xs: 2, md: 3 },
      }}
    >
      <Stack direction="row" spacing={1.75} sx={{ alignItems: 'flex-start', mb: 2.5 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            display: 'grid',
            placeItems: 'center',
            borderRadius: '8px',
            bgcolor: 'rgba(37, 99, 235, 0.10)',
            color: '#0B74DE',
            flexShrink: 0,
          }}
        >
          <AccountBalanceRoundedIcon />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: { xs: '1.55rem', md: '1.85rem' },
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#20212A',
            }}
          >
            Dados Bancarios
          </Typography>
          <Typography
            sx={{
              mt: 0.4,
              color: '#53627A',
              fontSize: '1rem',
              lineHeight: 1.45,
            }}
          >
            Conta bancaria cadastrada para recebimento de comissoes.
          </Typography>
        </Box>
      </Stack>

      {state.notice ? (
        <Alert
          severity={state.notice.type === 'warning' ? 'warning' : 'info'}
          sx={{
            mb: 2.5,
            borderRadius: '8px',
            border: `1px solid ${noticeColors.border}`,
            bgcolor: noticeColors.bg,
            color: noticeColors.text,
            '& .MuiAlert-icon': {
              color: noticeColors.text,
            },
          }}
        >
          {state.notice.message}
        </Alert>
      ) : null}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProfileTextField label="Banco" field={state.bank} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProfileTextField label="Tipo de conta" field={state.accountType} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProfileTextField label="Agencia" field={state.branch} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProfileTextField label="Conta" field={state.account} />
        </Grid>
      </Grid>

      <Stack
        component="ul"
        spacing={0.75}
        sx={{
          mt: 2.25,
          mb: 0,
          pl: 2.1,
          color: '#53627A',
          fontSize: '0.97rem',
        }}
      >
        {bulletItems.map((item) => (
          <Typography
            key={item}
            component="li"
            sx={{
              color: '#53627A',
              fontSize: '0.97rem',
              lineHeight: 1.45,
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  )
}
