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
		<motion.div
			initial={{ y: 0 }}
			animate={{ y: -1000 }}
			transition={{ duration: 0.45, delay: 3 }}
			className='bg-[#cb594c] w-full h-screen grid place-content-center'>
			<motion.img
				animate={{
					transition: { duration: 2.01, repeat: Infinity, ease: "linear" },
					rotate: [null, 360 * direction],
				}}
				src={logo}
				alt='Francis Tin-ao'
				className='w-14 h-14 m-auto'
			/>
			<div className='flex xxxs:flex-col xxxs:gap-0 md:flex-row md:gap-2 items-center'>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 1 }}
					className='font-span text-4xl mt-4'>
					CREATIVITY
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className='font-span text-4xl mt-4'>
					IN
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
					className='font-span text-4xl mt-4 text-white'>
					ACTION
				</motion.h1>
			</div>
		</motion.div>
	);
};
