
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Box } from '@mui/material';
import {Search,Feed,VideoDetail,ChannelDetail,Navbar} from './components';
const App = ()=> {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' element={<Search/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
