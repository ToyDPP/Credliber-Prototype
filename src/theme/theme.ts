import { alpha, createTheme } from '@mui/material/styles'

const primaryMain = '#F20A5B'
const primaryHover = '#D90750'
const textPrimary = '#20212A'
const textSecondary = '#53627A'
const borderColor = '#314B68'
const dividerColor = '#B8C3D3'

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryMain,
      dark: primaryHover,
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF4444',
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    background: {
      default: '#F3F7FA',
      paper: '#FFFFFF',
    },
    divider: dividerColor,
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
    h2: {
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: '-0.04em',
    },
    h6: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 0,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          minWidth: 320,
          background:
            'radial-gradient(circle at top left, rgba(255,255,255,0.98), rgba(243,247,250,1) 52%, rgba(238,244,249,1) 100%)',
          color: textPrimary,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '#root': {
          height: '100%',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          minHeight: 56,
          fontWeight: 700,
          boxShadow: 'none',
          paddingInline: 24,
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(135deg, #FF126B 0%, #F20A5B 100%)',
            boxShadow: '0 18px 40px rgba(242, 10, 91, 0.22)',
            '&:hover': {
              background: 'linear-gradient(135deg, #F31267 0%, #D90750 100%)',
              boxShadow: '0 20px 44px rgba(217, 7, 80, 0.28)',
            },
            '&.Mui-disabled': {
              color: '#FFFFFF',
              background: alpha(primaryMain, 0.68),
              boxShadow: 'none',
            },
          },
          '&.MuiButton-outlinedPrimary': {
            borderWidth: 1.5,
            color: textPrimary,
            borderColor: primaryMain,
            backgroundColor: '#FFFFFF',
            '&:hover': {
              borderWidth: 1.5,
              borderColor: primaryHover,
              backgroundColor: alpha(primaryMain, 0.03),
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          backgroundColor: '#FFFFFF',
          transition: theme.transitions.create(['box-shadow', 'border-color']),
          '& .MuiOutlinedInput-input': {
            padding: '17px 16px',
            fontSize: '1rem',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1.5,
            borderColor: alpha(borderColor, 0.42),
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(borderColor, 0.72),
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1.8,
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.08)}`,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
          },
          '&.Mui-disabled': {
            backgroundColor: alpha('#F3F7FA', 0.82),
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          fontSize: '0.92rem',
          '&.Mui-focused': {
            color: theme.palette.primary.main,
          },
          '&.Mui-error': {
            color: theme.palette.error.main,
          },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginInline: 0,
          marginTop: 8,
          fontSize: '0.92rem',
          lineHeight: 1.4,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          color: theme.palette.text.secondary,
          '&.Mui-checked': {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          border: `1px solid ${alpha(theme.palette.error.main, 0.18)}`,
          backgroundColor: alpha(theme.palette.error.main, 0.08),
          color: theme.palette.text.primary,
          '& .MuiAlert-icon': {
            color: theme.palette.error.main,
          },
        }),
      },
    },
  },
})
