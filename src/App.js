import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./Main";
import CoinStats from "./Pages/coinStats";


function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Main/>} />
      <Route path='/coins/{id}' element={<CoinStats/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;