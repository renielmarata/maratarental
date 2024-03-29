import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { styled } from "@mui/system";


// components
import GuestNavbar from "./guest/nav/guestNavbar";

// styled component
const LayoutContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    maxHeight: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
}))


const Layout = () => {
    return ( 
        <LayoutContainer maxWidth disableGutters>
            <GuestNavbar variant="temporary" />
            <Outlet/>
            layout
        </LayoutContainer>
     );
}
 
export default Layout;