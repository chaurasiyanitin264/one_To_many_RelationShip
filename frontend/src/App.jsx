import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import AddMoreData from "./pages/AddMoreData";
const App=()=>{
    return(
        <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>} >
            <Route index element={<Insert/>} />
            <Route path="insert" element={<Insert/>} />
            <Route path="display" element={<Display/>} />
            <Route path="addmoredata/:id" element={<AddMoreData/>} />
            </Route>
          </Routes>
          </BrowserRouter>
        </>
    )
}
export default App;