import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link'

import { Link as RwLink, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type ModularLayoutProps = {
  children?: React.ReactNode
}

const ModularLayout = ({ children }: ModularLayoutProps) => {
  const { logOut, hasRole } = useAuth()
  const links = [{ name: 'Status', to: routes.status() }]

  if (!hasRole('monitor')) {
    links.push({ name: 'Teleoperation', to: routes.teleoperation() })
  }

  const theme = createTheme()

  const title = 'Inspections'

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              {title}
            </Typography>
            <Button variant="outlined" size="small" onClick={logOut}>
              Sign out
            </Button>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
          >
            {links.map((link) => (
              <Link
                color="inherit"
                noWrap
                variant="body2"
                key={link.name}
                component={RwLink}
                to={link.to}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {link.name}
              </Link>
            ))}
          </Toolbar>
          <main>{children}</main>
        </Container>
        {/* <Footer description="Connect to your robot" title={title} /> */}
      </ThemeProvider>
    </>
  )
}

export default ModularLayout
