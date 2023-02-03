import React, { useRef } from "react";
import { getUrl } from "../../../../Data/Url";

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
    fetch(getUrl()+"/admins/checkLogin", content)
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
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-3" ></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Login admin side</h4>
                                    </div>
                                        <div className="mb-3"><input ref={email} className="form-control form-control-user" defaultValue="admin@gmail.com" type="email" placeholder="E-mail Address" /></div>
                                        <div className="mb-3"><input ref={pwd} className="form-control form-control-user" defaultValue="mdp" type="password" placeholder="Password" /></div>
                                        <button className="btn btn-primary d-block btn-user w-100" onClick={HandleLogin} type="submit">Log in </button>
                                </div>
                            </div>
                            <div className="col-lg-3" ></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LoginAdmin;
