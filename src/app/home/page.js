import React from "react";
import Image from "next/image";
import mascot from "../../../public/assests/images/mascot1.png";
import Navbar from "../../components/navbar/page.js";
import arrow from "../../../public/assests/images/aboutusLogo.png";

export default function Page() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url('/assests/images/Homepage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            padding: "0px 60px",
            justifyContent: "space-between",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "9%",
            }}
          >
            <div
              className="text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(56, 219, 112, 1), rgba(56, 219, 112, 0))",
                fontSize: "24px",
                width: "290px",
                padding: "10px 15px",
                borderRadius: "30px",
                textAlign: "center",
              }}
            >
              TECHFEST IIT ROPER
            </div>
            <div
              className="text-white"
              style={{
                fontSize: "150px",
                fontWeight: "400",
                fontFamily: "Impact",
                lineHeight: "231.75px",
              }}
            >
              ADVITIYA,24
            </div>
          </div>
          <div>
            <Image src={mascot} alt="..." style={{ marginTop: "20%" }} />
          </div>
        </div>
        <div style={{ height: "300px" }}></div>
      </section>
      <section 
      style={{
        backgroundColor:"rgba(17, 22, 28, 1)",
        padding:"100px 170px"
      }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{color:"rgba(59, 225, 116, 1)"

          }}>ABOUT US</span>
          <span style={{color:"white",
            fontSize:"60px"
          }}>ADVITIYA,24</span>
          <Image src={arrow} alt="..." />
        </div>
        <div 
         style={{color:"white",
          textAlign:"center",
          fontSize:"40px",
          fontFamily:"system-ui, sans-serif"
         }}>
          Welcome to Zeitgeist, the most anticipated and biggest techno-cultural
          fest in North India that showcases myriad events, workshops and talk
          series and is ornamented by the presence of various big names from
          different industries such as- Diljit Dosanjh, Anubhav Singh Bassi, the
          local Trian band, vishal-shekhar, zakir khan, sonam bajwa etc.
        </div>
      </section>
    </>
  );
}
