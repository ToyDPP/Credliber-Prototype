import { Alert, Box, Button, Divider, Stack, Typography } from '@mui/material'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import type { CompleteRegistrationFeedbackStateKey } from '../../types/prototype'

interface CompleteRegistrationFeedbackProps {
  variant: CompleteRegistrationFeedbackStateKey
  onBackToSystem: () => void
}

const successItems = [
  {
    id: 'registration',
    icon: <DescriptionOutlinedIcon sx={{ color: '#1D8B4D', fontSize: 22 }} />,
    text: 'Cadastro enviado com sucesso',
  },
  {
    id: 'biometry',
    icon: <CenterFocusStrongRoundedIcon sx={{ color: '#1D8B4D', fontSize: 22 }} />,
    text: 'Biometria em análise',
  },
  {
    id: 'access',
    icon: <LockOpenRoundedIcon sx={{ color: '#1D8B4D', fontSize: 22 }} />,
    text: 'Acesso ao sistema liberado',
  },
]

export function CompleteRegistrationFeedback({
  variant,
  onBackToSystem,
}: CompleteRegistrationFeedbackProps) {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={1.2} sx={{ alignItems: 'flex-start' }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '8px',
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'rgba(34, 197, 94, 0.10)',
            color: '#1D8B4D',
            flexShrink: 0,
          }}
        >
          <CheckCircleOutlineRoundedIcon />
        </Box>
        <Box>
          <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#303644', lineHeight: 1.2 }}>
            Recebemos seu cadastro e sua biometria facial
          </Typography>
          <Typography sx={{ mt: 0.35, color: '#53627A', fontSize: '1rem', lineHeight: 1.45 }}>
            Sua biometria foi enviada com sucesso e está em análise. Você será
            notificado assim que houver uma atualização.
          </Typography>
        </Box>
      </Stack>

      <Stack>
        {successItems.map((item) => (
          <Box key={item.id}>
            <Stack direction="row" spacing={1.1} sx={{ py: 1.15, alignItems: 'center' }}>
              {item.icon}
              <Typography sx={{ fontSize: '0.98rem', color: '#53627A' }}>
                {item.text}
              </Typography>
            </Stack>
            <Divider sx={{ borderColor: '#EEF2F6' }} />
          </Box>
        ))}

        {variant === 'emailNotConfirmed' ? (
          <Stack direction="row" spacing={1.1} sx={{ py: 1.15, alignItems: 'center' }}>
            <CloseRoundedIcon sx={{ color: '#E11D48', fontSize: 22 }} />
            <Typography sx={{ fontSize: '0.98rem', color: '#53627A' }}>
              E-mail não foi confirmado
            </Typography>
          </Stack>
        ) : null}
      </Stack>

      {variant === 'emailNotConfirmed' ? (
        <Alert
          icon={<ErrorRoundedIcon />}
          severity="error"
          sx={{
            bgcolor: 'rgba(242, 10, 91, 0.08)',
            borderColor: '#F20A5B',
            color: '#F20A5B',
            '& .MuiAlert-icon': {
              color: '#F20A5B',
            },
          }}
        >
          <Stack spacing={0.35}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#F20A5B' }}>
              Não encontrou o e-mail?
            </Typography>
            <Typography sx={{ fontSize: '1rem', color: '#F20A5B' }}>
              Verifique sua caixa de spam ou lixo eletrônico. O envio pode levar
              alguns minutos.
            </Typography>
          </Stack>
        </Alert>
      ) : null}

      <Button
        variant="contained"
        onClick={onBackToSystem}
        sx={{
          minHeight: 48,
          borderRadius: '8px',
          fontSize: '1.05rem',
        }}
      >
        Voltar ao sistema
      </Button>

      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: '#7A8AA6' }}>
        <GppGoodOutlinedIcon sx={{ fontSize: 22 }} />
        <Typography sx={{ fontSize: '0.96rem' }}>
          Seus dados permanecem protegidos e sua análise cadastral seguirá em
          segurança.
        </Typography>
      </Stack>
    </Stack>
  )
}
