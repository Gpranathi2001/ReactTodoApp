import React from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate() 
    return(
        <div>
            <h1>login</h1>
            <button onClick={()=> navigate('/')}>go to products page</button>
        </div>
    );
}
export default Login;