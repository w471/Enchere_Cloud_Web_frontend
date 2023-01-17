import React, { useRef } from "react";
import Header from "../../../Template/Client/Header";

const LoginClient = () => {
  const email = useRef(null);
  const pwd = useRef(null);

  function setInfo_Appro(data) {
    sessionStorage.setItem("Appro", JSON.stringify(data));
    window.location.href = "/homeApprovisionnement";
  }

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
      pwd: pwd.current.value,
    });
    fetch("http://127.0.0.1:3000/loginAppro", content)
      .then((response) => {
        if (response.status === 400) {
          alert("Mot de passe non identifier");
        } else return response.json();
      })
      .then((json) => {
        if (json.length !== 0) setInfo_Appro(json);
        else alert("Mot de passe non identifier");
      });
  };

  return (
    <>
    <Header />
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
            Login 
            <br />
          </h1>

          <div className="login-form">
            <form action="submit" method="post">
              <input ref={email} type="email" placeholder="E-mail Address" />
              <input ref={pwd} type="password" placeholder="Password" />
              <button type="submit" onClick={HandleLogin}>
                LOG-IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginClient;
