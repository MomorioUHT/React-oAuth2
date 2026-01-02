import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const onLoginSuccess = (credentialResponse) => {
        try {
            const decodedUser = jwtDecode(credentialResponse.credential);
            console.log("Login Success:", decodedUser);
            navigate("/home", {state: {profile: decodedUser}});
        } catch(e) {
            console.log("Decoding JWT failed", e);
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1>Login Page</h1>
            <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={() => console.log("Login Failed")}/>
        </div>
    )
}

export default LoginPage;