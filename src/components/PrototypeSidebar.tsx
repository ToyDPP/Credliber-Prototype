import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import type {
  PrototypeNavigationGroup,
  PrototypeScreenId,
  PrototypeViewId,
} from '../types/prototype'
import { CredliberLogo } from './CredliberLogo'

interface PrototypeSidebarProps {
  groups: PrototypeNavigationGroup[]
  selectedStateId: PrototypeViewId
  expandedGroupIds: PrototypeScreenId[]
  onSelect: (stateId: PrototypeViewId) => void
  onToggleGroup: (groupId: PrototypeScreenId) => void
  mobile?: boolean
  open?: boolean
  onClose?: () => void
}

function SidebarContent({
  groups,
  selectedStateId,
  expandedGroupIds,
  onSelect,
  onToggleGroup,
  onClose,
}: Omit<PrototypeSidebarProps, 'mobile' | 'open'>) {
  return (
    <Stack
      sx={{
        height: '100%',
        px: 2,
        py: 2.25,
        color: '#F4F7FB',
        background:
          'linear-gradient(180deg, rgba(17,22,33,1) 0%, rgba(22,28,41,1) 100%)',
      }}
    >
      <Stack spacing={0.75} sx={{ mb: 2.25 }}>
        <Stack direction="row" spacing={1.15} sx={{ alignItems: 'center' }}>
          <CredliberLogo symbolOnly compact />
          <Typography
            variant="h6"
            sx={{
              color: '#FFFFFF',
              fontSize: '1.18rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            CREDLIBER Prototype
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: 'rgba(232, 238, 247, 0.7)',
            fontSize: '0.92rem',
            lineHeight: 1.55,
          }}
        >
          Painel visual para alternar entre estados e evoluir novas telas do
          sistema.
        </Typography>
      </Stack>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 1.5 }} />

      <Box sx={{ flex: 1, overflowY: 'auto', pr: 0.25 }}>
        <List disablePadding>
          {groups.map((group) => {
            const expanded = expandedGroupIds.includes(group.id)
            const hasActiveChild = group.children.some(
              (child) => child.id === selectedStateId,
            )

            return (
              <Box key={group.id} sx={{ mb: 0.75 }}>
                <ListItemButton
                  onClick={() => onToggleGroup(group.id)}
                  sx={{
                    minHeight: 46,
                    px: 1.25,
                    py: 1,
                    borderRadius: '8px',
                    bgcolor: hasActiveChild
                      ? 'rgba(242, 10, 91, 0.14)'
                      : 'transparent',
                    border: hasActiveChild
                      ? '1px solid rgba(242, 10, 91, 0.2)'
                      : '1px solid transparent',
                    '&:hover': {
                      bgcolor: hasActiveChild
                        ? 'rgba(242, 10, 91, 0.18)'
                        : 'rgba(255,255,255,0.05)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      flex: 1,
                      color: hasActiveChild
                        ? '#FFFFFF'
                        : 'rgba(244, 247, 251, 0.92)',
                      fontSize: '0.98rem',
                      fontWeight: hasActiveChild ? 700 : 600,
                    }}
                  >
                    {group.label}
                  </Typography>
                  <ChevronRightRoundedIcon
                    sx={{
                      color: hasActiveChild
                        ? '#FFFFFF'
                        : 'rgba(232, 238, 247, 0.7)',
                      transition: 'transform 180ms ease',
                      transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
                    }}
                  />
                </ListItemButton>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Stack spacing={0.35} sx={{ mt: 0.55, pl: 1.15 }}>
                    {group.children.map((child) => {
                      const active = selectedStateId === child.id

                      return (
                        <ListItemButton
                          key={child.id}
                          onClick={() => {
                            onSelect(child.id)
                            onClose?.()
                          }}
                          sx={{
                            minHeight: 42,
                            px: 1.25,
                            py: 0.9,
                            borderRadius: '8px',
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
                              fontSize: '0.95rem',
                              fontWeight: active ? 700 : 500,
                              color: active
                                ? '#FFFFFF'
                                : 'rgba(244, 247, 251, 0.82)',
                              lineHeight: 1.35,
                            }}
                          >
                            {child.label}
                          </Typography>
                        </ListItemButton>
                      )
                    })}
                  </Stack>
                </Collapse>
              </Box>
            )
          })}
        </List>
      </Box>

      <Box
        sx={{
          mt: 1.6,
          pt: 1.6,
          borderTop: '1px solid rgba(255,255,255,0.08)',
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
      </Box>
    </Stack>
  )
}

export function PrototypeSidebar({
  groups,
  selectedStateId,
  expandedGroupIds,
  onSelect,
  onToggleGroup,
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
              borderRadius: 0,
              bgcolor: 'transparent',
              boxShadow: '0 16px 34px rgba(13, 23, 37, 0.24)',
            },
          },
        }}
      >
        <SidebarContent
          groups={groups}
          selectedStateId={selectedStateId}
          expandedGroupIds={expandedGroupIds}
          onSelect={onSelect}
          onToggleGroup={onToggleGroup}
          onClose={onClose}
        />
      </Drawer>
    )
  }

  return (
    <Box
      sx={{
        width: 272,
        height: '100vh',
        flexShrink: 0,
        display: { xs: 'none', md: 'block' },
        position: 'sticky',
        top: 0,
      }}
    >
      <Box
        sx={{
          height: '100%',
          borderRight: '1px solid rgba(15, 23, 42, 0.08)',
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          overflow: 'hidden',
          boxShadow: '2px 0 18px rgba(15, 23, 42, 0.06)',
        }}
      >
        <SidebarContent
          groups={groups}
          selectedStateId={selectedStateId}
          expandedGroupIds={expandedGroupIds}
          onSelect={onSelect}
          onToggleGroup={onToggleGroup}
        />
      </Box>
    </Box>
  )
}
