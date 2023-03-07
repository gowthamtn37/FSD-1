import { useEffect, useState } from "react";
import React from "react";

function checkAuth(res) {
  if (res.status === 401) {
    throw Error("unauthorized");
  } else {
    return res.json();
  }
}

function logOut() {
  localStorage.clear();
  //localStorage.removeItem("token")
  window.location.herf = "/";
}
export function PhoneList() {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/mobiles", {
      headers: { "x-auth-token": localStorage.getItem("token") },
    })
      .then((res) => checkAuth(res))
      .then((data) => setMobile(data))
      .catch((err) => logOut());
  }, []);
  return (
    <div className="phone-list-container">
      {mobile.map((mbl, index) => (
        <Phone mobile={mbl} key={index} />
      ))}
    </div>
  );
}
function Phone({ mobile }) {
  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      <h2>{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}
