import {
  InputAdornment,
  TextField,
  type SxProps,
  type Theme,
} from '@mui/material'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import type { ReactNode } from 'react'

interface RegistrationFieldProps {
  label: string
  value: string
  placeholder?: string
  error?: string
  showAlertIcon?: boolean
  selectLike?: boolean
  type?: string
  endAdornment?: ReactNode
  sx?: SxProps<Theme>
}

export function RegistrationField({
  label,
  value,
  placeholder,
  error,
  showAlertIcon = false,
  selectLike = false,
  type = 'text',
  endAdornment,
  sx,
}: RegistrationFieldProps) {
  const computedAdornment = endAdornment ? (
    endAdornment
  ) : showAlertIcon ? (
    <InputAdornment position="end">
      <ErrorRoundedIcon color="error" />
    </InputAdornment>
  ) : selectLike ? (
    <InputAdornment position="end">
      <ExpandMoreRoundedIcon sx={{ color: error ? 'error.main' : 'text.primary' }} />
    </InputAdornment>
  ) : undefined

  return (
    <TextField
      label={label}
      value={value}
      placeholder={placeholder}
      error={Boolean(error)}
      helperText={error ?? ' '}
      type={type}
      fullWidth
      sx={sx}
      slotProps={{
        inputLabel: { shrink: true },
        htmlInput: { readOnly: true },
        input: {
          endAdornment: computedAdornment,
        },
      }}
    />
  )
}
