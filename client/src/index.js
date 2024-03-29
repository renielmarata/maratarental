import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)

