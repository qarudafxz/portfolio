import { FC } from "react";
import { Link } from "react-scroll";
import menu from "../data/menu.json";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export const Navbar: FC = () => {
	return (
		<div className='flex justify-center'>
			<motion.div
				initial={{ y: 1000 }}
				animate={{ y: 0 }}
				transition={{
					duration: 0.5,
					delay: 1.5,
				}}
				className='font-sub text-white bg-black xxxs:hidden md:block fixed bottom-6 z-10 cursor-pointer rounded-full shadow-2xl pr-2'>
				<div className='flex gap-4 items-center py-2 px-2'>
					<img
						src={logo}
						alt=''
						className='w-10 bg-zinc-900 p-1 rounded-full'
					/>
					{menu.map((item, idx) => {
						return (
							<Link
								key={idx}
								to={item.link}
								spy={true}
								smooth={true}
								offset={-70}
								className={({ isActive }: { isActive: boolean }) =>
									`cursor-pointer px-3 py-2 ${
										isActive
											? " text-black bg-white rounded-full "
											: "text-white hover:duration-200 "
									} hover:bg-white text-black duration-200 no-underline `
								}>
								{item.label.toLowerCase()}
							</Link>
						);
					})}
				</div>
			</motion.div>
		</div>
	);
};
