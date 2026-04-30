import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface ChangePhotoModalProps {
  open: boolean
  onClose: () => void
  onSelectPhoto: () => void
  onSave: () => void
}

export function ChangePhotoModal({
  open,
  onClose,
  onSelectPhoto,
  onSave,
}: ChangePhotoModalProps) {
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
            maxWidth: 600,
            bgcolor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 26px 60px rgba(15, 23, 42, 0.22)',
            p: { xs: 2.5, md: 4 },
          }}
        >
          <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 1.6 }}>
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
            Alterar foto
          </Typography>
          <Typography sx={{ mt: 0.4, mb: 2.2, fontSize: '1rem', color: '#53627A' }}>
            Envie uma nova foto para o seu perfil.
          </Typography>

          <Box
            sx={{
              border: '2px dashed #7A8AA6',
              borderRadius: '8px',
              bgcolor: '#FBFDFF',
              p: 3,
              textAlign: 'center',
            }}
          >
            <CloudUploadOutlinedIcon sx={{ fontSize: 56, color: '#F20A5B' }} />
            <Typography sx={{ mt: 1.1, fontSize: '1rem', color: '#303644' }}>
              Arraste e solte sua foto aqui ou clique para selecionar um arquivo
            </Typography>
            <Button
              variant="contained"
              onClick={onSelectPhoto}
              sx={{ mt: 2, minHeight: 40, borderRadius: '8px', px: 3 }}
            >
              Selecionar foto
            </Button>
            <Typography sx={{ mt: 1.2, fontSize: '0.98rem', color: '#7A8AA6' }}>
              Escolha uma nova foto de perfil.
            </Typography>
          </Box>

          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 2.6 }}
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
              startIcon={<CheckRoundedIcon />}
              onClick={onSave}
              sx={{ minHeight: 40, borderRadius: '8px', px: 3 }}
            >
              Salvar
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  )
}
