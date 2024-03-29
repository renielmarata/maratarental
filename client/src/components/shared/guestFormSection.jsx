import { Container } from "@mui/material";
import { styled } from "@mui/system";


// styled components
const FormSectionContainer = styled(Container)(({ theme }) => ({
    border: '1px solid red',
}))



const GuestFormSection = () => {
    return ( 
        <FormSectionContainer>
            testing
        </FormSectionContainer>
     );
}
 
export default GuestFormSection;