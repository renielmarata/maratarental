import { Divider, Drawer, Stack, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

// react-icons
import { GoHomeFill } from "react-icons/go"; // home icon
import { FaServicestack } from "react-icons/fa"; // service icon
import { IoMdPricetags } from "react-icons/io"; // price icon
import { AiFillPhone } from "react-icons/ai"; // phone icon
import { ImFacebook } from "react-icons/im"; // facebook icon
import { MdEmail } from "react-icons/md"; // mail icon


// styled component
const CustomDrawer = styled(Drawer)(({ theme }) => ({
    zIndex: '1',
}))

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    marginTop: '100px',
    width: '100vw',
    height: '100%',
    justifyContent: 'start',
    alignItems: 'start',
}))

const NavHeader = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    fontWeight: '900',
    color: '#192024',
}))

const LinkContainer = styled(Stack)(({ theme }) => ({

}))

const LinkText = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '300',
}))


// icons
const HomeIcon = styled(GoHomeFill)(({ theme }) => ({
    fontSize: '22px',
}))

const PriceIcon = styled(IoMdPricetags)(({ theme }) => ({
    fontSize: '22px',
}))

const ServiceIcon = styled(FaServicestack)(({ theme }) => ({
    fontSize: '22px',
}))

const PhoneIcon = styled(AiFillPhone)(({ theme }) => ({
    fontSize: '22px',
}))

const FacebookIcon = styled(ImFacebook)(({ theme }) => ({
    fontSize: '22px',
}))

const EmailIcon = styled(MdEmail)(({ theme }) => ({
    fontSize: '22px',
}))

const GuestLeftDrawer = ({state}) => {
    return ( 
        <CustomDrawer open={state} BackdropProps={{invisible:true}} elevation={0}>
            <CustomToolbar>
                <Stack direction='column' spacing={3} sx={{height:'100%'}}>
                    <Stack direction='column' spacing={2}>
                        <NavHeader>Navigation</NavHeader>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <HomeIcon />
                            <LinkText>Home</LinkText>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <PriceIcon />
                            <LinkText>Prices</LinkText>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <ServiceIcon />
                            <LinkText>Services</LinkText>
                        </Stack>
                    </Stack>

                    <Divider />

                    <Stack direction='column' spacing={2}>
                        <NavHeader>Contact</NavHeader>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <PhoneIcon />
                            <LinkText>+63 9XX XXX XXXX</LinkText>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <FacebookIcon />
                            <LinkText>https://www.facebook.com/rentswift</LinkText>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <EmailIcon />
                            <LinkText>rentswift@gmail.com</LinkText>
                        </Stack>
                    </Stack>

                    <Divider />

                    <Stack direction='column' spacing={2}>
                        <NavHeader>Company</NavHeader>
                        <Stack direction='column' alignItems='start' spacing={1.5}>
                            <LinkText>Testimonials</LinkText>
                            <LinkText>About</LinkText>
                        </Stack>
                    </Stack>
                </Stack>

            </CustomToolbar>
        </CustomDrawer>
     );
}
 
export default GuestLeftDrawer;