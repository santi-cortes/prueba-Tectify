import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FirstSection from "./home/FirstSection/FirstSection";
import { useSpring, animated } from "@react-spring/web";
import { ClimbingBoxLoader } from "react-spinners";

const index = () => {
  const [startLoader, setStartLoader] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  
  const fade2 = useSpring({
    from: { opacity: 1 },
    to: { opacity: hideLoader ? 0 : 1 },
    config: { duration: 600}
  });

  useEffect(() => {
    setTimeout(() => {
      setStartLoader(false);
    }, 5000);
    setTimeout(() => {
      setHideLoader(true);
    }, 4300);
  }, []);
  

  return (
    <>
      {startLoader
        ?
        <animated.div style={fade2}>
          <div className="h-screen w-screen flex flex-col justify-center items-center">
            <ClimbingBoxLoader color={"#36D7B7"} loading={startLoader} size='30'/>
          </div>
        </animated.div>
        :
        <div className="h-screen w-screen background-first-section overflow-hidden page">
          <Header />
          <FirstSection/>
        </div>
      }    
    </>
  )
};

export default index;
