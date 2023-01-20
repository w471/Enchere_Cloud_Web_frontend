import React, { useRef } from "react";

const LoginAdmin = () => {
  const email = useRef(null);
  const pwd = useRef(null);

  const HandleLogin = (event) => {
    event.preventDefault();

    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    content.body = JSON.stringify({
      email: email.current.value,
      password: pwd.current.value,
    });
    fetch("http://127.0.0.1:8080/admins/checkLogin", content)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response);
        } 
        else if(response.status ===200)
          return response.text();
      })
      .then((token) => {
          localStorage.setItem("tokenAdmin",token);
          window.location.href = "/accueil";
      })
      .catch(error => {
        alert("Mot de passe non identifier");
      })
  };

  return (
    <div className="parent clearfix">
      <div className="bg-illustration">
        <div className="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="login">
        <div className="container">
          <h1>
            Login to access to
            <br />
            your account
          </h1>

          <div className="login-form">
            <form action="submit" method="post">
              <input ref={email} defaultValue="amdin@gmail.com" type="email" placeholder="E-mail Address" />
              <input ref={pwd} defaultValue="mdp" type="password" placeholder="Password" />
              <button type="submit" onClick={HandleLogin}>
                LOG-IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
