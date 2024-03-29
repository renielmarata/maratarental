import { useState } from "react";
import { Button, CardMedia, Container, Drawer, IconButton, Stack, Toolbar, Typography, } from "@mui/material";
import { styled } from "@mui/system";

// assets
import { AccountDrawerImage } from "../../../assets/image";

// react-icons
import { IoClose } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";


// styled components
const CustomDrawer = styled(Drawer)(({ theme }) => ({
    zIndex: '0',

}))

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    marginTop: '100px',
    padding: '15px',
    width: '100vw',
    height: '100vh',
    alignItems: 'start',
}))

const CustomStack = styled(Stack)(({ theme }) => ({
    width: '100%',
}))

const WebName = styled(Typography)(({ theme }) => ({
    fontSize: '25px',
    fontWeight: '900',
    color: '#FE5B3D',
}))

const CloseButton = styled(IoClose)(({ theme }) => ({
    fontSize: '24px',
}))

const Header = styled(Typography)(({ theme }) => ({
    fontSize: '21px',
    fontWeight: '500',
}))

const SubHeader = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
}))

const CustomButton = styled(Button)(({ theme }) => ({
    border: '1px solid #8B8B8B',
    padding: '8px 0px',
    fontSize: '15px',
    color: '#192024',
    textTransform: 'none',
    gap: '12px',
}))

const GoogleIcon = styled(FaGoogle)(({ theme }) => ({
    fontSize: '16px',
    color: 'red',
}))

const FacebookIcon = styled(FiFacebook)(({ theme }) => ({
    fontSize: '17px',
    color: 'blue',
}))

const TermsAndPolicty = styled(Typography)(({ theme }) => ({
    fontSize: '11px',
    textAlign: 'center',
    span: {
        color: 'blue',
    }
}))


const GuestRightDrawer = ({state, setState}) => {
    return (
        <CustomDrawer
            open={state}
            onClose={() => setState(!state)}
            anchor='right'
            BackdropProps={{ invisible: true }}
            elevation={0}
        >
            <CustomToolbar>
                <CustomStack spacing={4}>
                    <CardMedia
                        component="img"
                        image={AccountDrawerImage}
                        alt="banner"
                    ></CardMedia>

                    <Stack spacing={.7}>
                        <Header>
                            Signin to see more
                        </Header>
                        <SubHeader>
                            Get access to member-only deals. Price Alerts and more.
                        </SubHeader>
                    </Stack>

                    <Stack spacing={1}>
                        <CustomButton>
                            <GoogleIcon />
                            Continue with Google
                        </CustomButton>
                        <CustomButton>
                            <FacebookIcon />
                            Continue with Meta
                        </CustomButton>
                    </Stack>

                    <TermsAndPolicty>
                        By signing in you accept our <span>Terms of Use</span> and <span>Privacy Policy</span>
                    </TermsAndPolicty>
                </CustomStack>
            </CustomToolbar>
        </CustomDrawer>
    );
}
 
export default GuestRightDrawer;