import React from "react";
import HeaderSection from "../../components/HeaderSections";
import CancunText from "./CancunText";
import CancunCards from "./CancunCards";
import CancunSecond from "./CancunSecond";

const index = () => {
  return (
	<>
		<HeaderSection></HeaderSection>
		<section className="flex flex-row">
			<aside className="w-[550px] min-w-[400px] relative z-[-10] flex flex-row justify-center items-center mt-[5vh]">
				<img src="/images/cancunSection/cancun1.jpg" alt="Cancún" className="z-[-10] w-full h-[95vh] relative left-0" /> 
				<h1 className="title-cancun-section absolute text-white text-[100px]">CANCÚN</h1>
			</aside>
			<aside className="pl-[150px] mt-[5vh]">
				<CancunText/>
				<CancunCards/>
			</aside>
		</section>
		<section>
				<CancunSecond/>
		</section>
	</>
  )
};

export default index;
