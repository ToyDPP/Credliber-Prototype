import { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import type {
  PasswordRecoveryMessagesState,
  RecoveryChannel,
} from '../../types/prototype'
import { PasswordRecoveryLayout } from './PasswordRecoveryLayout'
import { RecoveryChannelOptions } from './RecoveryChannelOptions'

interface PasswordRecoveryMessagesProps {
  state: PasswordRecoveryMessagesState
  onGoToLogin: () => void
  onSimulateLinkClick: () => void
  onResend: (channel: RecoveryChannel) => void
}

const channelLabelMap: Record<RecoveryChannel, string> = {
  whatsapp: 'WhatsApp',
  email: 'E-mail',
  sms: 'SMS',
}

function formatCountdown(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function PasswordRecoveryMessages({
  state,
  onGoToLogin,
  onSimulateLinkClick,
  onResend,
}: PasswordRecoveryMessagesProps) {
  const [selectedChannel, setSelectedChannel] = useState<RecoveryChannel>(
    state.selectedChannel,
  )
  const [remainingSeconds, setRemainingSeconds] = useState(600)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(intervalId)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const canResend = remainingSeconds === 0
  const currentLabel = useMemo(
    () => channelLabelMap[state.selectedChannel],
    [state.selectedChannel],
  )

  return (
    <PasswordRecoveryLayout>
      <Stack spacing={3}>
        <Stack spacing={0.9} sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', sm: '2.9rem' } }}>
            Verifique suas mensagens
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 410, mx: 'auto' }}
          >
            Enviamos o link para o canal selecionado. Verifique suas mensagens
            para continuar.
          </Typography>
        </Stack>

        <Paper
          elevation={0}
          sx={{
            p: 2.1,
            borderRadius: '8px',
            border: '1px solid rgba(184, 195, 211, 0.28)',
            boxShadow: '0 14px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
            Último envio realizado para:
          </Typography>
          <Typography sx={{ mt: 0.45, fontSize: '1.45rem', fontWeight: 700 }}>
            {currentLabel}
          </Typography>
        </Paper>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={onGoToLogin}
        >
          Voltar para Login
        </Button>

        <Stack spacing={1.4}>
          <Typography variant="h6" sx={{ fontSize: '1.25rem' }}>
            Não recebeu o link?
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: '1.02rem', lineHeight: 1.55 }}>
            Você pode reenviar e escolher outro canal de recebimento.
          </Typography>
          <RecoveryChannelOptions
            value={selectedChannel}
            onChange={setSelectedChannel}
          />
        </Stack>

        <Paper
          elevation={0}
          sx={{
            p: 1.8,
            borderRadius: '8px',
            border: '1px solid rgba(184, 195, 211, 0.24)',
            boxShadow: '0 14px 24px rgba(15, 23, 42, 0.05)',
          }}
        >
          <Stack spacing={1.6}>
            <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '8px',
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: 'rgba(242, 10, 91, 0.12)',
                  color: 'primary.main',
                  flexShrink: 0,
                }}
              >
                <AccessTimeRoundedIcon fontSize="small" />
              </Box>
              <Stack spacing={0.15}>
                <Typography sx={{ color: 'text.primary', fontSize: '0.96rem' }}>
                  Você poderá reenviar em:
                </Typography>
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontSize: '2rem',
                    lineHeight: 1,
                    fontWeight: 800,
                  }}
                >
                  {formatCountdown(remainingSeconds)}
                </Typography>
              </Stack>
            </Stack>

            <Button
              variant="contained"
              color="inherit"
              endIcon={<ArrowForwardRoundedIcon />}
              disabled={!canResend}
              onClick={() => onResend(selectedChannel)}
              sx={{
                color: canResend ? '#FFFFFF' : '#7B8AA1',
                bgcolor: canResend ? 'primary.main' : 'rgba(15, 23, 42, 0.06)',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: canResend ? 'primary.dark' : 'rgba(15, 23, 42, 0.06)',
                },
              }}
            >
              Reenviar
            </Button>
          </Stack>
        </Paper>

        <Button
          variant="text"
          color="inherit"
          onClick={onSimulateLinkClick}
          sx={{
            alignSelf: 'center',
            color: 'text.secondary',
            minHeight: 0,
            px: 0,
            fontWeight: 500,
          }}
        >
          Simular clique no link recebido
        </Button>
      </Stack>
    </PasswordRecoveryLayout>
  )
}
