import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { CompleteRegistrationStepper } from './CompleteRegistrationStepper'
import { MockQrCode } from './MockQrCode'
import { SecurityNote } from './SecurityNote'
import type { CompleteRegistrationBiometryState } from '../../types/prototype'

interface FacialBiometryStepProps {
  state: CompleteRegistrationBiometryState
  onPrimaryAction: () => void
  onRetry?: () => void
  onBack?: () => void
  onSimulateSuccess?: () => void
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
    id: 'face',
    icon: <CenterFocusStrongRoundedIcon sx={{ color: '#1D8B4D' }} />,
    text: 'Posicione o rosto no centro e siga as instrucoes na tela',
  },
  {
    id: 'back',
    icon: (
      <ArrowForwardRoundedIcon
        sx={{ color: '#1D8B4D', transform: 'rotate(180deg)' }}
      />
    ),
    text: 'Apos finalizar no celular, volte para esta tela',
  },
]

export function FacialBiometryStep({
  state,
  onPrimaryAction,
  onRetry,
  onBack,
  onSimulateSuccess,
}: FacialBiometryStepProps) {
  const isAnalyzing = state.stateKey === 'analyzing'
  const isSuccess = state.stateKey === 'success'
  const isError = state.stateKey === 'error'

  const primaryLabel = isError ? 'Tentar novamente' : 'Finalizar cadastro'

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
          Biometria Facial
        </Typography>
        <Typography sx={{ color: '#53627A', fontSize: '1.15rem' }}>
          Confirme sua identidade para concluir a validacao do cadastro.
        </Typography>
      </Stack>

      <CompleteRegistrationStepper currentStep={3} />

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
              bgcolor: 'rgba(34, 197, 94, 0.10)',
              color: '#1D8B4D',
              flexShrink: 0,
            }}
          >
            <VerifiedUserOutlinedIcon />
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#303644' }}
            >
              Biometria Facial
            </Typography>
            <Typography sx={{ fontSize: '1rem', color: '#53627A' }}>
              Para concluir esta etapa, escaneie o QR Code com o seu celular e
              faca a selfie por la.
            </Typography>
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Box
            sx={{
              flex: { md: '0 0 320px' },
              border: '1px solid #E8ECF2',
              borderRadius: '8px',
              boxShadow: '0 12px 24px rgba(15, 23, 42, 0.05)',
              p: 2,
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 700,
                mb: 1.6,
              }}
            >
              {isSuccess
                ? 'Validacao concluida'
                : isAnalyzing
                  ? 'Biometria em analise'
                  : 'Escaneie o QR Code'}
            </Typography>

            {isSuccess ? (
              <Stack spacing={1.4} sx={{ alignItems: 'center', py: 2.6 }}>
                <CheckCircleOutlineRoundedIcon
                  sx={{ fontSize: 72, color: '#1D8B4D' }}
                />
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: '#1D8B4D',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  Biometria validada com sucesso
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: '#53627A',
                    fontSize: '0.98rem',
                    lineHeight: 1.5,
                  }}
                >
                  Sua identidade foi confirmada. Voce ja pode finalizar seu
                  cadastro.
                </Typography>
              </Stack>
            ) : isError ? (
              <Stack spacing={1.4} sx={{ alignItems: 'center', py: 2.2 }}>
                <ErrorOutlineRoundedIcon
                  sx={{ fontSize: 72, color: '#EF4444' }}
                />
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: '#EF4444',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  Nao foi possivel validar sua biometria
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: '#53627A',
                    fontSize: '0.98rem',
                    lineHeight: 1.5,
                  }}
                >
                  Tente escanear o QR Code novamente em um ambiente bem
                  iluminado e mantenha o rosto centralizado.
                </Typography>
              </Stack>
            ) : isAnalyzing ? (
              <Stack spacing={1.4} sx={{ alignItems: 'center', py: 2.8 }}>
                <CircularProgress size={72} thickness={4} />
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: '#0B6BCE',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  Biometria enviada para analise
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: '#53627A',
                    fontSize: '0.98rem',
                    lineHeight: 1.5,
                  }}
                >
                  Estamos aguardando o retorno da validacao facial. Isso pode
                  levar alguns instantes.
                </Typography>
              </Stack>
            ) : (
              <>
                <MockQrCode />
                <Typography
                  sx={{
                    mt: 1.6,
                    color: '#53627A',
                    fontSize: '0.98rem',
                    textAlign: 'center',
                    lineHeight: 1.5,
                  }}
                >
                  Use a camera do seu celular ou o leitor de QR Code para abrir
                  a validacao facial.
                </Typography>

                <Alert
                  icon={<SmartphoneRoundedIcon fontSize="small" />}
                  severity="info"
                  sx={{
                    mt: 1.5,
                    borderColor: 'transparent',
                    bgcolor: 'rgba(242, 10, 91, 0.10)',
                    color: '#F20A5B',
                    '& .MuiAlert-icon': {
                      color: '#F20A5B',
                    },
                  }}
                >
                  A validacao sera feita no celular
                </Alert>

                <Link
                  component="button"
                  type="button"
                  underline="hover"
                  onClick={onSimulateSuccess}
                  sx={{
                    mt: 1.2,
                    alignSelf: 'center',
                    fontSize: '0.94rem',
                    color: '#64748B',
                  }}
                >
                  Simular leitura do QR Code
                </Link>
              </>
            )}
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
                color: '#303644',
                mb: 1.4,
              }}
            >
              Como concluir no celular:
            </Typography>
            <Stack>
              {instructions.map((item, index) => (
                <Box key={item.id}>
                  <Stack
                    direction="row"
                    spacing={1.25}
                    sx={{ py: 1.35, alignItems: 'center' }}
                  >
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

            {isAnalyzing ? (
              <Alert
                icon={<InfoOutlinedIcon />}
                severity="info"
                sx={{
                  mt: 1.6,
                  borderColor: '#0B6BCE',
                  bgcolor: 'rgba(59, 130, 246, 0.08)',
                  color: '#0B6BCE',
                }}
              >
                <Stack spacing={0.25}>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>
                    Biometria enviada para analise
                  </Typography>
                  <Typography sx={{ fontSize: '0.98rem' }}>
                    Estamos aguardando o retorno da validacao facial. Isso pode
                    levar alguns instantes.
                  </Typography>
                </Stack>
              </Alert>
            ) : isError ? (
              <Alert
                icon={<ErrorOutlineRoundedIcon />}
                severity="error"
                sx={{
                  mt: 1.6,
                  borderColor: '#EF4444',
                  bgcolor: 'rgba(239, 68, 68, 0.08)',
                }}
              >
                Tente escanear o QR Code novamente em um ambiente bem iluminado
                e mantenha o rosto centralizado.
              </Alert>
            ) : (
              <Alert
                icon={<InfoOutlinedIcon />}
                severity="info"
                sx={{
                  mt: 1.6,
                  borderColor: isSuccess ? '#1D8B4D' : '#0B6BCE',
                  bgcolor: isSuccess
                    ? 'rgba(34, 197, 94, 0.08)'
                    : 'rgba(59, 130, 246, 0.08)',
                  color: isSuccess ? '#1D8B4D' : '#0B6BCE',
                  '& .MuiAlert-icon': {
                    color: isSuccess ? '#1D8B4D' : '#0B6BCE',
                  },
                }}
              >
                {isSuccess
                  ? 'Sua identidade foi confirmada. Voce ja pode finalizar seu cadastro.'
                  : 'Apos concluir a selfie no celular, a validacao sera reconhecida automaticamente aqui. Nao salvamos suas fotos. A validacao e feita de forma segura.'}
              </Alert>
            )}
          </Box>
        </Stack>
      </Box>

      <Stack spacing={1.4}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            endIcon={!isError ? <ArrowForwardRoundedIcon /> : undefined}
            onClick={isError ? onRetry : onPrimaryAction}
            sx={{
              width: { xs: '100%', md: 480 },
              minHeight: 52,
              borderRadius: '8px',
            }}
          >
            {primaryLabel}
          </Button>
        </Box>

        {isError ? (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              component="button"
              type="button"
              underline="hover"
              onClick={onBack}
              sx={{
                fontSize: '0.95rem',
                color: '#64748B',
              }}
            >
              Voltar
            </Link>
          </Box>
        ) : null}

        <SecurityNote text="Suas informacoes sao protegidas com criptografia de ponta a ponta e usadas apenas para validacao cadastral." />
      </Stack>
    </Stack>
  )
}
