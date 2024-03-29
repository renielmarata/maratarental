import { Button, Card, CardMedia, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

// assets
import { HeroBanner } from "../../assets/image";


// styled components
const HeroSectionContainer = styled(Container)(({ theme }) => ({
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid red',

}))

const Header = styled(Typography)(({ theme }) => ({
    lineHeight: '90px',
    fontFamily: 'raleway',
    fontSize: '70px',
    fontWeight: '900',
    whiteSpace: 'pre-line',
    span: {
        color: '#FE5B3D',
        fontWeight: '900',
    }
}))

const SubHeader = styled(Typography)(({ theme }) => ({
    fontSize: '25px',
    fontWeight: '500',
    color: '#192024',
    whiteSpace: 'pre-line',
}))

const CustomCard = styled(Card)(({ theme }) => ({
    width: '60%',
    height: 'auto',
    position: 'relative',
}))

const BookRideButton = styled(Button)(({ theme }) => ({
    width: '190px',
    height: '70px',
    fontSize: '18px',
    color: '#FFFFFF',
    textTransform: 'none',
    backgroundColor: '#FE5B3D',
    boxShadow: '0 8px 30px 1px rgba(255, 180, 166, 0.5)',
    '&:hover': {
        backgroundColor: '#FE5B3D',
    }
}))

const HeroSection = () => {
    return (
        <HeroSectionContainer maxWidth disableGutters>
            <Stack direction="row" justifyContent='space-between' sx={{width: '100%'}}>
                <Stack spacing={10} justifyContent='center' sx={{width:'40%'}}>
                    <Stack spacing={3}>
                        <Header>
                            Save <span>big</span> with our {'\n'} car rentals
                        </Header>
                        <SubHeader>
                            Drive your dreams. Unbeatable rates, limitless {"\n"} miles, flexible pick-ups, and more. Book now
                        </SubHeader>
                    </Stack>
                    <BookRideButton>Book Ride</BookRideButton>
                </Stack>

                <CustomCard elevation={0}>
                    <CardMedia
                        component="img"
                        image={HeroBanner}
                        alt="Hero Banner"
                    />
                </CustomCard>
            </Stack>
        </HeroSectionContainer>
    );
}
 
export default HeroSection;