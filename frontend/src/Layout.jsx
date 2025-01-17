import TopMenu from "./component/TopMenu";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Outlet} from "react-router-dom";
const Layout=()=>{

return(
    <>
      <Header/>
      <TopMenu/>
      <Outlet/>
      <Footer/>
    </>
)
}
export default Layout;