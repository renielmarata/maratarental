import { Container } from "@mui/material";
import { styled } from "@mui/system";



// components
import { HeroSection } from "../../components";


// styled component
const LandingContainer = styled(Container)(({ theme }) => ({
    padding: '0% 9%',
    minHeight: '100vh',
}))


const GuestLandingPage = () => {
    return ( 
        <LandingContainer maxWidth disableGutters>
            <HeroSection/>
        </LandingContainer>
     );
}
 
export default GuestLandingPage;