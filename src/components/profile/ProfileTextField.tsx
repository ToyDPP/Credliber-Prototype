import { InputAdornment, TextField } from '@mui/material'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import type { PrototypeFieldState } from '../../types/prototype'

interface ProfileTextFieldProps {
  label: string
  field: PrototypeFieldState
}

export function ProfileTextField({ label, field }: ProfileTextFieldProps) {
  const endAdornment = field.locked ? (
    <InputAdornment position="end">
      <LockOutlinedIcon sx={{ color: '#B7C1D0', fontSize: 22 }} />
    </InputAdornment>
  ) : field.selectLike ? (
    <InputAdornment position="end">
      <KeyboardArrowDownRoundedIcon sx={{ color: '#2A3547' }} />
    </InputAdornment>
  ) : field.showAlertIcon ? (
    <InputAdornment position="end">
      <ErrorRoundedIcon color="error" />
    </InputAdornment>
  ) : undefined

  return (
    <TextField
      fullWidth
      label={label}
      value={field.value}
      placeholder={field.placeholder}
      error={Boolean(field.error)}
      helperText={field.error ?? ' '}
      slotProps={{
        inputLabel: { shrink: true },
        htmlInput: { readOnly: true },
        input: {
          endAdornment,
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          bgcolor: field.locked ? '#F7FAFD' : '#FFFFFF',
        },
        '& .MuiInputBase-input': {
          color: field.locked ? '#7A8AA6' : '#20212A',
        },
      }}
    />
  )
}
