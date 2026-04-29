import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import type {
  LoginPrototypeStateId,
  PrototypeNavigationSection,
} from '../types/prototype'

interface PrototypeSidebarProps {
  sections: PrototypeNavigationSection[]
  selectedStateId: LoginPrototypeStateId
  onSelect: (stateId: LoginPrototypeStateId) => void
  mobile?: boolean
  open?: boolean
  onClose?: () => void
}

function SidebarContent({
  sections,
  selectedStateId,
  onSelect,
  onClose,
}: Omit<PrototypeSidebarProps, 'mobile' | 'open'>) {
  return (
    <Stack
      sx={{
        height: '100%',
        p: 2.25,
        color: '#F4F7FB',
        background:
          'linear-gradient(180deg, rgba(16,20,31,0.98) 0%, rgba(22,29,42,0.98) 100%)',
      }}
    >
      <Stack spacing={0.8} sx={{ mb: 3.2 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#FFFFFF',
            fontSize: '1.2rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
          }}
        >
          CREDLIBER Prototype
        </Typography>
        <Typography
          sx={{
            color: 'rgba(232, 238, 247, 0.68)',
            fontSize: '0.92rem',
            lineHeight: 1.55,
          }}
        >
          Painel visual para alternar entre estados e evoluir novas telas do
          sistema.
        </Typography>
      </Stack>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2.4 }} />

      <Stack spacing={2.4} sx={{ flex: 1 }}>
        {sections.map((section) => (
          <Box key={section.id}>
            <Typography
              sx={{
                px: 1.4,
                mb: 0.8,
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'rgba(232, 238, 247, 0.52)',
                textTransform: 'uppercase',
              }}
            >
              {section.label}
            </Typography>

            <List disablePadding>
              {section.items.map((item) => {
                const active = selectedStateId === item.id

                return (
                  <ListItemButton
                    key={item.id}
                    onClick={() => {
                      onSelect(item.id)
                      onClose?.()
                    }}
                    sx={{
                      mb: 0.5,
                      borderRadius: 2.5,
                      px: 1.4,
                      py: 1.15,
                      alignItems: 'flex-start',
                      bgcolor: active
                        ? 'rgba(242, 10, 91, 0.18)'
                        : 'transparent',
                      border: active
                        ? '1px solid rgba(242, 10, 91, 0.26)'
                        : '1px solid transparent',
                      '&:hover': {
                        bgcolor: active
                          ? 'rgba(242, 10, 91, 0.22)'
                          : 'rgba(255,255,255,0.05)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.98rem',
                        fontWeight: active ? 700 : 500,
                        color: active ? '#FFFFFF' : 'rgba(244, 247, 251, 0.88)',
                        lineHeight: 1.35,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </ListItemButton>
                )
              })}
            </List>
          </Box>
        ))}
      </Stack>

      <Paper
        elevation={0}
        sx={{
          p: 1.6,
          borderRadius: 3,
          bgcolor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '0.94rem',
            fontWeight: 600,
            mb: 0.35,
          }}
        >
          Proximas telas
        </Typography>
        <Typography
          sx={{
            color: 'rgba(232, 238, 247, 0.64)',
            fontSize: '0.84rem',
            lineHeight: 1.55,
          }}
        >
          A mesma estrutura ja esta pronta para receber Suporte, Radar,
          Transacoes, Equipes e demais modulos.
        </Typography>
      </Paper>
    </Stack>
  )
}

export function PrototypeSidebar({
  sections,
  selectedStateId,
  onSelect,
  mobile = false,
  open = false,
  onClose,
}: PrototypeSidebarProps) {
  if (mobile) {
    return (
      <Drawer
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            sx: {
              width: 304,
              bgcolor: 'transparent',
              boxShadow: '0 24px 60px rgba(13, 23, 37, 0.34)',
            },
          },
        }}
      >
        <SidebarContent
          sections={sections}
          selectedStateId={selectedStateId}
          onSelect={onSelect}
          onClose={onClose}
        />
      </Drawer>
    )
  }

  return (
    <Box
      sx={{
        width: 280,
        flexShrink: 0,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          p: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            height: '100%',
            overflow: 'hidden',
            borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.16)',
            boxShadow: '0 24px 56px rgba(15, 23, 42, 0.12)',
          }}
        >
          <SidebarContent
            sections={sections}
            selectedStateId={selectedStateId}
            onSelect={onSelect}
          />
        </Paper>
      </Box>
    </Box>
  )
}
