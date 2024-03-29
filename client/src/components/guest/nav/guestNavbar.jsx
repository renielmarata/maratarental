import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Box, Button, Container, Drawer, Hidden, IconButton, Menu, MenuItem, MenuList, Stack, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

// styles
import "../../../styles/components/guestNavbarStyle.css"; 

// react-icons
import { GiHamburgerMenu } from "react-icons/gi"; //hamburger menu
import { HiUser } from "react-icons/hi"; // user icon
import { IoMdClose } from "react-icons/io"; // close icon

// components
import GuestLeftDrawer from "./guestLeftDrawer";
import GuestRightDrawer from "./guestRightDrawer.jsx";


// styled components
const GuestAppBarContainer = styled(Box)(({ theme }) => ({
    height: '90px',
}))

const GuestAppBar = styled(AppBar)(({ theme }) => ({
    padding: '0% 9%',
    height: 'inherit',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #d9e2e8',
    position: 'fixed',
    zIndex:'2',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '0% 7%',
        border: 'none',
    },
    [theme.breakpoints.only('md')]: {
        padding: '0% 5%',
    }
}));

const GuestToolBar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
}));

const WebName = styled(Typography)(({ theme }) => ({
    fontFamily: 'raleway',
    fontSize: '40px',
    fontWeight: '900',
    color: '#FE5B3D',
    textDecoration: 'none',
    [theme.breakpoints.down('lg')]: {
        fontSize: '25px',
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '30px',
    }
}));

const Links = styled(NavLink)(({ theme }) => ({
    fontSize: '16px',
    color: '#192024',
    textDecoration: 'none',
    position: 'relative',
    [theme.breakpoints.only('lg')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '15px',
    }
}));

const SignupButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: '#192024',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'transparent',
    },
    [theme.breakpoints.only('lg')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '14px',
    }
}))

const SigninButton = styled(Button)(({ theme }) => ({
    padding: '10px 30px',
    fontSize: '16px',
    color: '#FE5B3D',
    textTransform: 'none',
    border: '1px solid#FE5B3D',
    '&:hover': {
        border: '1px solid #FE5B3D',
        backgroundColor: 'transparent',
    },
    [theme.breakpoints.only('lg')]: {
        padding: '8px 28px',
        fontSize: '16px',
    },
    [theme.breakpoints.only('md')]: {
        padding: '8px 25px',
        fontSize: '14px',
    }
}))

// =========== MOBILE UI ===========
const MenuIcon = styled(GiHamburgerMenu)(({ theme }) => ({
    fontSize: '22px',
    color: '#000000',
}))

const Close = styled(IoMdClose)(({ theme }) => ({
    fontSize: '22px',
    color: '#000000',
}))

const UserIcon = styled(HiUser)(({ theme }) => ({
    fontSize: '25px',
    color: '#192024',
}))





const GuestNavbar = () => {
    const [openLeft, setOpenLeft] = useState(false);
    const [openRight, setOpenRight] = useState(false);

    const handle_left = () => {
        setOpenRight(false);
        setOpenLeft(!openLeft);
    }

    const handle_right = () => {
        setOpenLeft(false);
        setOpenRight(!openRight);
    }


    return (
        <GuestAppBarContainer direction='column'>
            <GuestAppBar elevation={0}>
                <GuestToolBar disableGutters>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <Hidden mdUp>
                            <IconButton>
                                {openLeft ? <Close onClick={handle_left} /> : <MenuIcon onClick={handle_left} />}
                            </IconButton>
                        </Hidden>
                        <WebName component={Link} to="/">RentSwift</WebName>
                    </Stack>
                    <Hidden mdDown>
                        <Stack direction='row' spacing={{xs:4, md:3, lg:4}} alignItems='center'>
                            <Links to="/" exact activeClassName='active'>Home</Links>
                            <Links to="/about">About</Links>
                            <Links to="/service">Service</Links>
                            <Links to="/testimonial">Testimonials</Links>
                            <Links to="/contact">Contact</Links>
                        </Stack>
                        <Stack direction='row' spacing={{xs:3, md:1, lg:3}}>
                            <SignupButton disableTouchRipple size='large'>Signup</SignupButton>
                            <SigninButton variant='outlined'>Signin</SigninButton>
                        </Stack>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton onClick={()=> setOpenRight(!openRight)}>
                            {openRight ? <Close onClick={handle_right} /> : <UserIcon onClick={handle_right} />}
                        </IconButton>
                    </Hidden>
                </GuestToolBar>
            </GuestAppBar>

            
            {/* ----- DRAWERS ---------*/}
            <Hidden mdUp>
                <GuestRightDrawer state={openRight} />
                <GuestLeftDrawer state={openLeft} setState={setOpenLeft} />
            </Hidden>

        </GuestAppBarContainer>
    );
}

export default GuestNavbar;
