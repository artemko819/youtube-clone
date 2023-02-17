import { Box } from "@mui/system";
import { Navbar } from "components";
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "pages";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Box sx={{ backgroundColor: '#111' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
