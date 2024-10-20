import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box sx={{
      boxSizing: 'border-box',
      background: 'linear-gradient(rgb(248,254,254), rgb(249,253,252))',
      // background: 'white',
      height: '100vh'
    }}>
      <Outlet/>
    </Box>
  );
}

export default App;
