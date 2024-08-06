import { useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function CustomerLogin(){

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);

    let navigate = useNavigate();

    function handleIdChange(e){
        setUserId(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handlLoginClick(){

            if(userId==="john_nit") {
                setCookie("userid", userId);
                navigate("/categories");
            } else {
                navigate("/error");
            }

    }

    return(
        <div>
            <h3>Customer Login</h3>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={handleIdChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePassword} /></dd>
            </dl>
            <button onClick={handlLoginClick} className="btn btn-primary">Login</button>
        </div>
    )
}