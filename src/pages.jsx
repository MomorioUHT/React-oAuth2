import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google";

import HomePage from "./pages/homepage"
import NotFoundPage from "./pages/notfound"
import LoginPage from "./pages/loginpage";

function App() {
    const clientId = process.env.REACT_APP_OAUTH_CLIENT_ID || "Undefined";

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<Navigate to="/login"/>} />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App 