import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "antd";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const CancunSecond = () => {
	const [count, setCount] = useState(3);
	

	const one = useRef(null);
	const two = useRef(null);
	const three = useRef(null);
	const four = useRef(null);
	const five = useRef(null);
	
	const body = {
		1: one,
		2: two,
		3: three,
		4: four,
		5: five
	}
	
	const imageForward = () => {
		if(count == 5) {
			return;
		}
		setCount(count + 1);
		/* console.log(count + 1);
		body[count + 1].current.style.width = '550px';
		let options = [1, 2, 3, 4, 5];
		delete options[count]; 
		for (let option in options) {
			body[parseInt(option) + 1].current.style.width = '176px';
		} */
	}

	const imageBack = () => {
		if(count == 1) {
			return;
		}
		setCount(count - 1)
		/* body[count - 1].current.style.width = '550px';
		let options = [1, 2, 3, 4, 5];
		delete options[count - 2]; 
		for (let option in options) {
			body[parseInt(option) + 1].current.style.width = '176px';
		} */
	}

	const fade1 = useSpring({
		from: { width: 176 },
		to: { width: count == 1 ? 550 : 176 },
		config: { duration: 300}
	});

	const fade2 = useSpring({
		from: { width: 176 },
		to: { width: count == 2 ? 550 : 176 },
		config: { duration: 300}
	});

	const fade3 = useSpring({
		from: { width: 176 },
		to: { width: count == 3 ? 550 : 176 },
		config: { duration: 300}
	});
	
	const fade4 = useSpring({
		from: { width: 176 },
		to: { width: count == 4 ? 550 : 176 },
		config: { duration: 300}
	});
	
	const fade5 = useSpring({
		from: { width: 176 },
		to: { width: count == 5 ? 550 : 176 },
		config: { duration: 300}
	});
	

  return (
	<div className="h-screen flex flex-col justify-start items-center">
		<h1 className="text-4xl mt-[240px] title-second-cancun relative mb-[80px]">EXPERIENCIAS</h1>
		<div className="flex flex-row">
			<animated.img style={fade1} src="/images/cancunSection/cancun5.jpg" alt="Experiencias uno" className="w-44 h-[550px]" ref={one}/>
			<animated.img style={fade2} src="/images/cancunSection/cancun6.jpg" alt="Experiencias uno" className="w-44 h-[550px]" ref={two}/>
			<animated.img style={fade3} src="/images/cancunSection/cancun7.jpg" alt="Experiencias uno" className="w-[550px] h-[550px]" ref={three}/>
			<animated.img style={fade4} src="/images/cancunSection/cancun8.jpg" alt="Experiencias uno" className="w-44 h-[550px]" ref={four} />
			<animated.img style={fade5} src="/images/cancunSection/cancun9.jpg" alt="Experiencias uno" className="w-44 h-[550px]" ref={five}/>
		</div>
		<div className="flex gap-16 mt-10">
			<Button onClick={imageBack}>
				<AiOutlineArrowLeft className="text-lg"/>
			</Button>
			<Button onClick={imageForward}>
				<AiOutlineArrowRight className="text-lg"/>
			</Button>
		</div>
	</div>
  )
};

export default CancunSecond;
