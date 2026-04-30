import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface RemovePhotoModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export function RemovePhotoModal({
  open,
  onClose,
  onConfirm,
}: RemovePhotoModalProps) {
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
          <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 2.2 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                display: 'grid',
                placeItems: 'center',
                borderRadius: '8px',
                bgcolor: 'rgba(242, 10, 91, 0.10)',
                color: '#F20A5B',
              }}
            >
              <CameraAltOutlinedIcon />
            </Box>
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

          <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#20212A' }}>
            Remover foto
          </Typography>
          <Typography sx={{ mt: 0.45, fontSize: '1rem', color: '#303644' }}>
            Tem certeza que deseja remover sua foto do perfil?
          </Typography>

          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 4 }}
          >
            <Button
              color="inherit"
              onClick={onClose}
              sx={{ minHeight: 40, borderRadius: '8px', color: '#41536A' }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={onConfirm}
              sx={{ minHeight: 40, borderRadius: '8px', px: 3 }}
            >
              Remover
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  )
}
