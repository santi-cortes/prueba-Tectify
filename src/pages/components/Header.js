import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
	<div className="flex justify-between p-5 ">
		<img src="/svg/logos/first-section/logo.svg" alt="Logo" />
		<nav className="text-white text-base w-2/6 font-medium flex justify-center gap-5">
			<a href="/home/cancun" className="hover:underline">Cancún</a>
			<a href="#" className="hover:underline">Promociones</a>
			<a href="#" className="hover:underline">Agendar</a>
			<a href="#" className="hover:underline">Nosotros</a>
			<a href="#" className="hover:underline">Contacto</a>
		</nav>
		<Button className="bg-[#4eb8b1] text-white p-5 flex justify-center items-center mr-10">Acceder</Button>
	</div>
  )
};

export default Header;
