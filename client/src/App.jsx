import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { styled } from "@mui/system";



// pages
import { GuestLandingPage } from "./pages";

// components
import { Layout } from "./components";



// styled components
const AppContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
}))

const App = () => {
    return ( 
        <AppContainer maxWidth disableGutters>
            <Routes>
                <Route path="/*" element={<Layout />}>
                    <Route index element={<GuestLandingPage />} />
                </Route>
            </Routes>
        </AppContainer>
     );
}
 
export default App;