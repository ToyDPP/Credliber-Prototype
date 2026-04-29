import { Box, Button, Divider, Modal, Stack, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

interface FirstAccessModalProps {
  open: boolean
  onClose: () => void
  onConcludeRegistration: () => void
}

const checklistItems = [
  {
    id: 'document',
    icon: <BadgeRoundedIcon sx={{ color: '#F20A5B', fontSize: 22 }} />,
    text: 'Informe os dados do seu documento de identificação.',
  },
  {
    id: 'bank',
    icon: <AccountBalanceRoundedIcon sx={{ color: '#F20A5B', fontSize: 22 }} />,
    text: 'Informe sua conta bancária para recebimento das comissões.',
  },
  {
    id: 'identity',
    icon: <SecurityRoundedIcon sx={{ color: '#F20A5B', fontSize: 22 }} />,
    text: 'Confirme sua identidade para concluir a validação do cadastro.',
  },
]

export function FirstAccessModal({
  open,
  onClose,
  onConcludeRegistration,
}: FirstAccessModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        onClick={onClose}
        sx={{
          position: 'fixed',
          inset: 0,
          bgcolor: 'rgba(15, 23, 42, 0.32)',
          display: 'grid',
          placeItems: 'center',
          p: 3,
        }}
      >
        <Box
          onClick={(event) => event.stopPropagation()}
          sx={{
            width: '100%',
            maxWidth: 608,
            bgcolor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 24px 54px rgba(15, 23, 42, 0.22)',
            p: { xs: 3, sm: 4 },
          }}
        >
          <Stack direction="row" sx={{ justifyContent: 'flex-end', mb: 1.5 }}>
            <Box
              onClick={onClose}
              sx={{
                width: 56,
                height: 56,
                display: 'grid',
                placeItems: 'center',
                borderRadius: '8px',
                bgcolor: 'rgba(242, 10, 91, 0.10)',
                color: '#F20A5B',
                cursor: 'pointer',
              }}
            >
              <CloseRoundedIcon sx={{ fontSize: 28 }} />
            </Box>
          </Stack>

          <Stack spacing={1.25} sx={{ textAlign: 'center', mb: 3.25 }}>
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem' },
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.04em',
              }}
            >
              Conclua seu Cadastro
            </Typography>
            <Typography
              sx={{
                fontSize: '1.05rem',
                lineHeight: 1.55,
                color: '#53627A',
                maxWidth: 470,
                mx: 'auto',
              }}
            >
              Para efetuar o saque das suas comissões e liberar o acesso completo
              ao sistema, finalize agora a validação do seu cadastro.
            </Typography>
          </Stack>

          <Divider sx={{ borderColor: '#EEF2F6', mb: 3 }} />

          <Stack spacing={2.35} sx={{ mb: 3 }}>
            {checklistItems.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                spacing={1.5}
                sx={{ alignItems: 'center' }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '8px',
                    bgcolor: 'rgba(242, 10, 91, 0.10)',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography sx={{ fontSize: '1.02rem', color: '#303644' }}>
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Divider sx={{ borderColor: '#EEF2F6', mb: 3 }} />

          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={onConcludeRegistration}
            sx={{
              minHeight: 48,
              borderRadius: '8px',
              fontSize: '1.05rem',
            }}
          >
            Concluir Cadastro
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
