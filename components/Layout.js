
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarEs from "./NavbarEs"

import {useRouter} from 'next/router';


const Layout = ({children}) => {
  const router = useRouter();
    return ( <> 
    {router.pathname === "/es"
                                ? <NavbarEs /> 
                                : <Navbar /> }
    
      {children}
    <Footer /> 
    </>
    )
}

export default Layout
