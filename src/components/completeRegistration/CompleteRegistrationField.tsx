import { InputAdornment, TextField } from '@mui/material'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import type { PrototypeFieldState } from '../../types/prototype'

interface CompleteRegistrationFieldProps {
  label: string
  field: PrototypeFieldState
}

export function CompleteRegistrationField({
  label,
  field,
}: CompleteRegistrationFieldProps) {
  return (
    <TextField
      fullWidth
      label={label}
      placeholder={field.placeholder}
      value={field.value}
      error={Boolean(field.error)}
      helperText={field.error ?? ' '}
      slotProps={{
        inputLabel: { shrink: true },
        htmlInput: { readOnly: true },
        input: {
          endAdornment: field.selectLike ? (
            <InputAdornment position="end">
              <KeyboardArrowDownRoundedIcon sx={{ color: '#74839D' }} />
            </InputAdornment>
          ) : field.showAlertIcon ? (
            <InputAdornment position="end">
              <ErrorRoundedIcon color="error" />
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  )
}
