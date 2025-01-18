import TopMenu from "./component/TopMenu";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Outlet} from "react-router-dom";
const Layout=()=>{

return(
    <>
      <Header/>
      <TopMenu/>
      <hr />
      <Outlet/>
      <hr />
      <Footer/>
    </>
)
}
export default Layout;