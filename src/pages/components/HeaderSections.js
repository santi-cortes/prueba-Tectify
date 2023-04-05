import { Button } from "antd";
import React from "react";

const HeaderSection = () => {
  return (
	<div className="flex justify-between items-center p-5 header-sections fixed bg-white w-full z-10 h-[5vh] min-h-[70px]">
		<img src="/svg/logos/first-section/logo.svg" alt="Logo" className="h-[30px]"/>
		<nav className="text-base w-2/6 font-medium flex justify-center items-center gap-5">
			<a href="/#" className="hover:underline">Inicio</a>
			<a href="/home/cancun" className="hover:underline">Cancún</a>
			<a href="#" className="hover:underline">Promociones</a>
			<a href="#" className="hover:underline">Agendar</a>
			<a href="/home/about" className="hover:underline">Nosotros</a>
			<a href="#" className="hover:underline">Contacto</a>
		</nav>
		<Button className="bg-[#4eb8b1] text-white px-10 py-6 flex justify-center items-center mr-10 rounded-2xl h-[50px]">Acceder</Button>
	</div>
  )
};

export default HeaderSection;
