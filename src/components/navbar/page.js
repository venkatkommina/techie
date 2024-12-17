import React from "react";
import Image from "next/image";
import logo from "../../../public/assests/images/logoMain.png";
import arrow from "../../../public/assests/images/aboutusLogo.png";

export default function page() {
  return (
    <div>
      <section
        style={{
          backgroundColor: "rgb(18 24 30)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding:"32px 50px"
        }}
      >
        <Image
          src={logo}
          alt="../"
          style={{ width: "243px", }}
        />
        <div style={{ color: "white" }}>0 0 0 0 0 0</div>
        <div style={{ display: "flex" }}>
          <button style={{ 
            color: "white",
              padding:"7px 30px",
             borderRadius:"20px",
             fontSize:"20px",
             backgroundImage:"linear-gradient(to bottom, rgba(67, 242, 127, 1), rgba(10, 119, 47, 1))",
             margin:"0px 20px 0px 0px"
              }}>
            SIGN IN
          </button>
          <button style={{ color: "white" }}>MENU</button>
        </div>
      </section>
     
    </div>
  );
}
