import { Button } from "antd";
import React from "react";

const CardPromo = () => {
  return (
		<div className="w-[530px] h-[775px] rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-lg flex justify-start items-start flex-col p-[45px] gap-[20px] first-section-card">
				<h1 className="text-[40px] font-bold">PROMOS</h1>
				<div className="bg-white text-black rounded-[35px] w-full h-[135px] flex flex-row p-3 children-card">
					<aside className="pr-5">
						<img src="/images/promos/promos-1.jpg" alt="promociones" className="w-[100px] h-[100px] rounded-3xl" />
					</aside>
					<aside>
						<title className="">
						</title>
						<p className="text-base relative top-[-5px]">DESDE</p>
						<p className="text-[#4eb8b1] font-bold relative top-[-8px]">13,500 MXN</p>
						<p className="text-[10px] mb-2">POR PERSONA</p>
						<div className="flex flex-row relative left-[-10px]">
							<Button className="bg-[#4eb8b1] mr-5 px-4 text-white rounded-2xl text-[15px]">Más información</Button>
							<img src="/icons-1.svg" alt="" />
						</div>
					</aside>
				</div>
				<div className="bg-white text-black rounded-[35px] w-full h-[135px] flex flex-row p-3 children-card">
					<aside className="pr-5">
						<img src="/images/promos/promo-2.jpg" alt="promociones" className="w-[100px] h-[100px] rounded-3xl" />
					</aside>
					<aside>
						<title className="">
						</title>
						<p className="text-base relative top-[-5px]">DESDE</p>
						<p className="text-[#4eb8b1] font-bold relative top-[-8px]">13,500 MXN</p>
						<p className="text-[10px] mb-2">POR PERSONA</p>
						<div className="flex flex-row relative left-[-10px]">
							<Button className="bg-[#4eb8b1] mr-5 px-4 text-white rounded-2xl text-[15px]">Más información</Button>
							<img src="/icons-1.svg" alt="" />
						</div>
					</aside>
				</div>
				<div className="bg-white text-black rounded-[35px] w-full h-[135px] flex flex-row p-3 children-card">
					<aside className="pr-5">
						<img src="/images/promos/promo-3.jpg" alt="promociones" className="w-[100px] h-[100px] rounded-3xl" />
					</aside>
					<aside>
						<title className="">
						</title>
						<p className="text-base relative top-[-5px]">DESDE</p>
						<p className="text-[#4eb8b1] font-bold relative top-[-8px]">13,500 MXN</p>
						<p className="text-[10px] mb-2">POR PERSONA</p>
						<div className="flex flex-row relative left-[-10px]">
							<Button className="bg-[#4eb8b1] mr-5 px-4 text-white rounded-2xl text-[15px]">Más información</Button>
							<img src="/icons-1.svg" alt="" />
						</div>
					</aside>
				</div>
				<div className="bg-white text-black rounded-[35px] w-full h-[135px] flex flex-row p-3 children-card">
					<aside className="pr-5">
						<img src="/images/promos/promo-4.jpg" alt="promociones" className="w-[100px] h-[100px] rounded-3xl" />
					</aside>
					<aside>
						<title className="">
						</title>
						<p className="text-base relative top-[-5px]">DESDE</p>
						<p className="text-[#4eb8b1] font-bold relative top-[-8px]">13,500 MXN</p>
						<p className="text-[10px] mb-2">POR PERSONA</p>
						<div className="flex flex-row relative left-[-10px]">
							<Button className="bg-[#4eb8b1] mr-5 px-4 text-white rounded-2xl text-[15px]">Más información</Button>
							<img src="/icons-1.svg" alt="" />
						</div>
					</aside>
				</div>
			</div>
  )
};

export default CardPromo;
