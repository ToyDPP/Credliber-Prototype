import { Box, Button } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

interface ProfileSaveButtonProps {
  label?: string
  onClick: () => void
}

export function ProfileSaveButton({
  label = 'Salvar alteracoes',
  onClick,
}: ProfileSaveButtonProps) {
  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 16,
        mt: 4,
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: 4,
      }}
    >
      <Button
        variant="contained"
        startIcon={<CheckRoundedIcon />}
        onClick={onClick}
        sx={{
          minHeight: 48,
          borderRadius: '8px',
          px: 2.5,
          boxShadow: '0 14px 30px rgba(242, 10, 91, 0.22)',
        }}
      >
        {label}
      </Button>
    </Box>
  )
}
