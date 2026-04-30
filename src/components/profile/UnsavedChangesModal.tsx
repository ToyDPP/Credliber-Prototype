import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface UnsavedChangesModalProps {
  open: boolean
  onClose: () => void
  onConfirmExit: () => void
}

export function UnsavedChangesModal({
  open,
  onClose,
  onConfirmExit,
}: UnsavedChangesModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        onClick={onClose}
        sx={{
          position: 'fixed',
          inset: 0,
          bgcolor: 'rgba(15, 23, 42, 0.36)',
          display: 'grid',
          placeItems: 'center',
          p: 2,
        }}
      >
        <Box
          onClick={(event) => event.stopPropagation()}
          sx={{
            width: '100%',
            maxWidth: 608,
            bgcolor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 26px 60px rgba(15, 23, 42, 0.22)',
            p: { xs: 2.5, md: 4 },
          }}
        >
          <Stack direction="row" sx={{ justifyContent: 'flex-end', mb: 2 }}>
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
              <CloseRoundedIcon />
            </Box>
          </Stack>

          <Stack spacing={1.25} sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.45rem' },
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.04em',
              }}
            >
              Alteracoes nao salvas
            </Typography>
            <Typography
              sx={{
                fontSize: '1.05rem',
                lineHeight: 1.5,
                color: '#53627A',
                maxWidth: 480,
                mx: 'auto',
              }}
            >
              As alteracoes feitas nesta pagina ainda nao foram salvas. Deseja
              sair mesmo assim?
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4,
              gap: 2,
            }}
          >
            <Button
              color="inherit"
              onClick={onClose}
              sx={{ minHeight: 40, borderRadius: '8px', color: '#41536A' }}
            >
              Continuar editando
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              onClick={onConfirmExit}
              sx={{ minHeight: 40, borderRadius: '8px', px: 3 }}
            >
              Sair
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  )
}
