import { FC, useState, useEffect } from "react";
import { Link } from "react-scroll";
import menu from "../data/menu.json";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/logo.svg";

export const Navbar: FC = () => {
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
		<div className='flex justify-center'>
			<motion.div
				initial={{ y: 1000 }}
				animate={{ y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.64,
				}}
				className='font-sub text-white bg-black xxxs:hidden md:block fixed bottom-6 z-10 cursor-pointer rounded-full shadow-2xl pr-2 outline outline-zinc-900'>
				<div className='flex gap-4 items-center py-2 px-2'>
					<motion.img
						animate={{
							transition: { duration: 2.01, repeat: Infinity, ease: "linear" },
							rotate: [null, 360 * direction],
						}}
						src={logo}
						alt=''
						className='w-10 bg-zinc-900 p-2 rounded-full'
					/>
					{menu.map((item, idx) => {
						return (
							<Link
								key={idx}
								to={item.link}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								//eslint-disable-next-line
								//@ts-ignore
								activeClass='active'
								className='cursor-pointer px-3 py-2 hover:duration-200 hover:bg-zinc-950 rounded-full hover:no-underline hover:text-[#cb594c]'>
								{item.label.toLowerCase()}
							</Link>
						);
					})}
				</div>
			</motion.div>
		</div>
	);
};
