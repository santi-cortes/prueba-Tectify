import { Button } from "antd";
import React, { useEffect, useState } from "react";
import CardPromo from "./CardPromo";
import { AiOutlineArrowRight } from "react-icons/ai"
import { useSpring, animated } from "@react-spring/web";

const FirstSection = () => {
	const [activeAnimation, setActiveAnimation] = useState(false);
	
	const fade1 = useSpring({
		from: {
			x: 100,
			opacity: 0,
		},
		to: {
			opacity: activeAnimation ? 1 : 0,
			x: activeAnimation ? 0 : 100,
		},
		config: {duration: 600, friction: 50}
	});

	const fade2 = useSpring({
		from: {
			y: 100,
			opacity: 0,
		},
		to: {
			opacity: activeAnimation ? 1 : 0,
			y: activeAnimation ? 0 : 100,
		},
		config: {duration: 600, friction: 100}
	});

	const fade3 = useSpring({
		from: {
			x: -100,
			opacity: 0,
		},
		to: {
			opacity: activeAnimation ? 1 : 0,
			x: activeAnimation ? 0 : -100,
		},
		config: {duration: 600, friction: 100}
	});
	
	useEffect(() => {
	  setTimeout(() => {
		setActiveAnimation(true);
	  }, 600);
	}, []);
	


  return (
	<div className="h-[90%] flex justify-between p-10 text-white page">
		<section className="flex flex-col justify-center items-center">
			<animated.div style={fade3}>
			<div className="flex flex-col justify-between p-16">
				<div>
				<img src="/svg/logos/first-section/logo2.svg" alt="logo principal" className="w-[150px] relative left-[-40px]" />
				<img src="/svg/logos/first-section/logo3.svg" alt="TRAVELMATE" className="w-[400px]"/>
				<p className="ml-[30px] relative top-[-15px] text-[20px] w-[450px]">Operadora Mayorista Nacional e Internacional <br /> Mas de 10 años de experiencia en Cancún</p>
				</div>
			</div>
			</animated.div>
			<div className="flex justify-start items-start w-full px-24">
			<animated.div style={fade2}>
				<Button className="bg-[#4eb8b1] text-white flex flex-row justify-center items-center gap-2 px-8 py-5">
					Explora
					<AiOutlineArrowRight className="text-lg"/>
				</Button>
			</animated.div>
				<img src="/svg/logos/first-section/logo4.svg" alt="Redes sociales" className="absolute left-0 bottom-28"/>
			</div>
		</section>
		<section className="w-[530px] flex justify-center items-center">
			<animated.div style={fade1}>
			<CardPromo/>
			</animated.div>
		</section>
	</div>

  )
};

export default FirstSection;
