import {useEffect, useRef, useState} from "react";
import {getUrl} from "../../../../Data/Url";
const LoginClient =() =>{
    const email = useRef(null);
  const pwd = useRef(null);

  const HandleLogin = () => {
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
    fetch(getUrl()+"/clients/checkLogin", content)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response);
        } 
        else if(response.status ===200)
          return response.json();
      })
      .then((token) => {
          localStorage.setItem("tokenClient",token[0]);
          localStorage.setItem("idClient",token[1])
          window.location.href = "/homeC";
      })
      .catch(error => {
        alert("Mot de passe ou email non identifier");
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
                                        <h4 className="text-dark mb-4">Login client side</h4>
                                    </div>
                                        <div className="mb-3"><input ref={email} className="form-control form-control-user" defaultValue="jean@gmail.com" type="email" placeholder="E-mail Address" /></div>
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
}
export default LoginClient;