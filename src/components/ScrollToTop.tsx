import { FC } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const ScrollToTop: FC = () => {
	return (
		<div className='fixed bottom-16 z-20 xxxs:right-4 md:right-8'>
			{/* rotate the button 20deg to the left */}
			<motion.div
				whileHover={{
					rotate: -20,
					transition: { duration: 0.2 },
				}}>
				<Link
					to='home'
					smooth={true}
					duration={500}
					className='cursor-pointer'>
					<BiUpArrowAlt
						size={50}
						className='text-semi bg-black rounded-full p-2'
					/>
				</Link>
			</motion.div>
		</div>
	);
};
