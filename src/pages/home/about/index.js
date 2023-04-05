import React from "react";
import HeaderSection from "../../components/HeaderSections";

const index = () => {
  return (
	<>
		<HeaderSection></HeaderSection>
		<section className="flex flex-col">
			<aside className="my-20 relative z-[-10] flex flex-row justify-center items-center">
				<img src="/images/about/about1.jpg" alt="Cancún" className="z-[-10] h-[400px] w-[90vw] relative left-0 rounded-3xl" /> 
			</aside>
			<aside className="flex flex-row ml-[20vw]">
				<h1 className="w-72 title-about text-4xl font-normal">ACERCA DE TRAVELMATE</h1>
				<p className="text-[#8D8D8D] w-4/6">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</aside>
		</section>
	</>
  )
};

export default index;
