import { Button } from "antd";
import React from "react";

const CancunText = () => {
  return (
	<div className="w-[580px] flex flex-col justify-center pt-20">
		<h1 className="font-medium text-[24px]">
			Cancún
		</h1>
		<p className="mt-[15px] text-[#8D8D8D]">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptates maxime aspernatur, ad distinctio quia odio, corrupti animi, aliquid sint fugit veniam quas. Quam necessitatibus, nulla exercitationem voluptatum dolores quasi.
		</p>
			<img src="/svg/logos/cancun/logos1.svg" alt="Medios de transporte" className="mt-0 w-64"/>
			<ul type="A" className="mt-5 text-[#8D8D8D]">
				<li>- 5 dias y 4 noches Grand Oasis All inclusive</li>
				<li>- Vuelo redondo Origen-Cancún-Origen</li>
				<li>- Transportacion In & Out</li>
				<li>- Concierge incluído</li>
			</ul>
			<Button className="w-52 bg-[#4eb8b1] text-white mt-10">Enviar Whatsapp</Button>
	</div>
  )
};

export default CancunText;
