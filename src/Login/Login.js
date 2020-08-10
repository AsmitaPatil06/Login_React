import React from "react";
import './Login.css';


function Login(props) {
    let success = false;
    const checkUser = (event) => {
        event.preventDefault();
        let usrname = document.getElementById("username").value;

        let password = document.getElementById("password").value;
        if (usrname === "Asmi" && password === "Asmi") {
            props.history.push("/dashboard");
        }



        else {
           // props.history.push("/");
            alert("Enter Valid username and password!!!");
            success = true;
        }
    };
    return (
       
        <div class="login-form">
            <form >
                <h2 class="text-center">Log in</h2>
                <div class="form-group">
                    <input type="text" class="form-control" id="username"  placeholder="Username" required="required"></input>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password" 
                            placeholder="Password" required="required"></input>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block" onClick={checkUser}>Log in</button>
                </div>

            </form>

        </div>

    );
}
export default Login;