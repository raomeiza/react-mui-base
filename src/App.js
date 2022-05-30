import Sidebar from './components/sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import { Stack, Box } from '@mui/material';

function App() {
  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={1} justifyContent="space-between" color="secondary" mt={1}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
