import { FC, useState, useEffect } from "react";
import logo from "../assets/logo_black.svg";
import { motion, useAnimation } from "framer-motion";

export const Preloader: FC = () => {
	const controls = useAnimation();
	const [direction, setDirection] = useState<number>(1);

	useEffect(() => {
		controls.start({
			rotate: [null, 480 * direction],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "linear",
			},
		});

		setTimeout(() => {
			setDirection(-1 * direction);
		}, 3000);
	}, [direction, controls]);

	return (
		<div className='bg-[#cb594c] w-full h-screen grid place-content-center'>
			<motion.img
				animate={{
					transition: { duration: 2.01, repeat: Infinity, ease: "linear" },
					rotate: [null, 360 * direction],
				}}
				src={logo}
				alt='Francis Tin-ao'
				className='w-14 h-14'
			/>
		</div>
	);
};
