import { CssBaseline, AppBar, Toolbar, Box, Container } from '@mui/material';
import EmployeeDirectory from './components/employee-directory';
import logo from './assets/Securin_logo.jpeg';

const App = () => {
  return (
    <div>
      <CssBaseline />
      
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 80,
              marginRight: 5,
            }}
            alt="Company Logo"
            src={logo}
          />
        </Toolbar>
      </AppBar>
      
      <Container sx={{ backgroundColor: '#F2F0EA', minHeight: '100vh', paddingTop: '20px' }}>
        <EmployeeDirectory />
      </Container>
    </div>
  );
};

export default App;