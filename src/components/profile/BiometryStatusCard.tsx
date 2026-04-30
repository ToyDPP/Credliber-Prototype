import {
  Alert,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import type { ProfileBiometryStatus } from '../../types/prototype'
import { MockQrCode } from '../completeRegistration/MockQrCode'

interface BiometryStatusCardProps {
  status: ProfileBiometryStatus
  onRetry?: () => void
}

const instructions = [
  {
    id: 'scan',
    icon: <CameraAltOutlinedIcon sx={{ color: '#1D8B4D' }} />,
    text: 'Escaneie o codigo com a camera do seu celular',
  },
  {
    id: 'open',
    icon: <OpenInNewRoundedIcon sx={{ color: '#1D8B4D' }} />,
    text: 'Abra o link da validacao e permita o uso da camera',
  },
  {
    id: 'center',
    icon: <CenterFocusStrongRoundedIcon sx={{ color: '#1D8B4D' }} />,
    text: 'Posicione o rosto no centro e siga as instrucoes na tela',
  },
]

export function BiometryStatusCard({
  status,
  onRetry,
}: BiometryStatusCardProps) {
  if (status === 'approved') {
    return (
      <Alert
        icon={<CheckCircleOutlineRoundedIcon />}
        severity="success"
        sx={{
          border: '1px solid #24A35A',
          borderRadius: '8px',
          bgcolor: 'rgba(34, 197, 94, 0.08)',
          '& .MuiAlert-message': { width: '100%' },
        }}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
          Biometria aprovada
        </Typography>
        <Typography sx={{ fontSize: '0.98rem', mt: 0.25 }}>
          Sua identidade foi confirmada com sucesso. Cadastro validado.
        </Typography>
      </Alert>
    )
  }

  if (status === 'pending') {
    return (
      <Alert
        icon={<WarningAmberRoundedIcon />}
        severity="warning"
        sx={{
          border: '1px solid #F59E0B',
          borderRadius: '8px',
          bgcolor: 'rgba(245, 158, 11, 0.08)',
          '& .MuiAlert-message': { width: '100%' },
        }}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
          Biometria em analise
        </Typography>
        <Typography sx={{ fontSize: '0.98rem', mt: 0.25 }}>
          Recebemos sua biometria facial e ela esta sendo analisada. Voce sera
          notificado assim que houver uma atualizacao.
        </Typography>
      </Alert>
    )
  }

  if (status === 'rejected') {
    return (
      <Alert
        icon={<ErrorOutlineRoundedIcon />}
        severity="error"
        action={
          <Button
            variant="contained"
            onClick={onRetry}
            sx={{ borderRadius: '8px', minHeight: 40 }}
          >
            Refazer biometria
          </Button>
        }
        sx={{
          alignItems: 'center',
          borderRadius: '8px',
          bgcolor: 'rgba(239, 68, 68, 0.08)',
          '& .MuiAlert-action': {
            alignSelf: 'center',
            mr: 0,
            pr: 0,
          },
          '& .MuiAlert-message': { width: '100%' },
        }}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
          Biometria nao aprovada
        </Typography>
        <Typography sx={{ fontSize: '0.98rem', mt: 0.25 }}>
          Nao foi possivel concluir a validacao facial. Reface a biometria para
          finalizar seu cadastro.
        </Typography>
      </Alert>
    )
  }

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box
        sx={{
          flex: { md: '0 0 310px' },
          border: '1px solid #E8ECF2',
          borderRadius: '8px',
          boxShadow: '0 12px 24px rgba(15, 23, 42, 0.05)',
          p: 2,
        }}
      >
        <Typography
          sx={{ textAlign: 'center', fontSize: '1rem', fontWeight: 700, mb: 1.5 }}
        >
          Escaneie o QR Code
        </Typography>
        <MockQrCode />
        <Typography
          sx={{
            mt: 1.5,
            color: '#53627A',
            fontSize: '0.98rem',
            textAlign: 'center',
            lineHeight: 1.45,
          }}
        >
          Use a camera do seu celular ou o leitor de QR Code para abrir a
          validacao facial.
        </Typography>
        <Alert
          icon={<SmartphoneRoundedIcon fontSize="small" />}
          severity="info"
          sx={{
            mt: 1.6,
            borderRadius: '8px',
            borderColor: 'transparent',
            bgcolor: 'rgba(242, 10, 91, 0.10)',
            color: '#F20A5B',
            '& .MuiAlert-icon': { color: '#F20A5B' },
          }}
        >
          A validacao sera feita no celular
        </Alert>
      </Box>

      <Box
        sx={{
          flex: 1,
          border: '1px solid #E8ECF2',
          borderRadius: '8px',
          boxShadow: '0 12px 24px rgba(15, 23, 42, 0.05)',
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#20212A',
            mb: 1.2,
          }}
        >
          Como concluir no celular:
        </Typography>
        <Stack>
          {instructions.map((item, index) => (
            <Box key={item.id}>
              <Stack direction="row" spacing={1.25} sx={{ py: 1.2, alignItems: 'center' }}>
                {item.icon}
                <Typography sx={{ fontSize: '0.98rem', color: '#53627A' }}>
                  {item.text}
                </Typography>
              </Stack>
              {index < instructions.length - 1 ? (
                <Divider sx={{ borderColor: '#EEF2F6' }} />
              ) : null}
            </Box>
          ))}
        </Stack>
        <Alert
          severity="info"
          sx={{
            mt: 1.6,
            borderRadius: '8px',
            borderColor: '#0B6BCE',
            bgcolor: 'rgba(59, 130, 246, 0.08)',
            color: '#0B6BCE',
          }}
        >
          Apos concluir a selfie no celular, a validacao sera reconhecida
          automaticamente aqui. Nao salvamos suas fotos. A validacao e feita de
          forma segura.
        </Alert>
      </Box>
    </Stack>
  )
}
