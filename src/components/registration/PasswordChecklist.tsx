import { Stack, Typography } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import type { PasswordChecklistItem } from '../../types/prototype'

interface PasswordChecklistProps {
  items: PasswordChecklistItem[]
}

export function PasswordChecklist({ items }: PasswordChecklistProps) {
  return (
    <Stack spacing={0.9}>
      {items.map((item) => {
        const icon =
          item.status === 'success' ? (
            <CheckRoundedIcon sx={{ color: '#22C55E', fontSize: 20 }} />
          ) : item.status === 'error' ? (
            <CloseRoundedIcon sx={{ color: 'error.main', fontSize: 20 }} />
          ) : (
            <RemoveRoundedIcon sx={{ color: 'text.primary', fontSize: 20 }} />
          )

        return (
          <Stack
            key={item.id}
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center' }}
          >
            {icon}
            <Typography
              sx={{
                color:
                  item.status === 'neutral' ? 'text.primary' : 'text.primary',
                fontSize: '0.98rem',
              }}
            >
              {item.label}
            </Typography>
          </Stack>
        )
      })}
    </Stack>
  )
}
