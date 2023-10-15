import { FC, useState } from "react";
import me from "../assets/me.png";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Tooltip } from "@chakra-ui/react";

export const About: FC = () => {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<div
			id='about'
			className='w-full p-4 bg-main xxxs:h-[1100px]'>
			<div className='container'>
				<div className='row items-center'>
					<div className='xxxs:col col-span-1 md:col col-md-6'>
						<motion.img
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{
								opacity: 1,
								scale: 1,
							}}
							src={me}
							alt='Francis'
							className='w-full'
						/>
					</div>
					<div className='col col-lg-5 pt-14'>
						<ScrollAnimation
							animateIn='fadeIn'
							delay={50}>
							<p className='font-head font-semibold'>Hi! I'm</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='fadeIn'
							delay={150}>
							<h1 className='font-title font-bold my-3 xxxs:text-xl lg:text-2xl xl:text-6xl'>
								<span className='text-semi'>Francis</span> Tin-ao
							</h1>
						</ScrollAnimation>

						<ScrollAnimation
							animateIn='fadeIn'
							delay={150}>
							<p className='font-text text-justify pb-6 xxxs:text-xs md:text-md lg:text-sm xl:text-lg'>
								I am a 21-year-old Tech with an insatiable appetite for knowledge and a
								boundless passion for the world of technology. My unwavering motivation
								and unrelenting optimism define me as a student constantly hungry to
								delve deeper into the intricacies of the Tech Industry. At the heart of
								my current journey lies a relentless pursuit of web application
								development, accompanied by a thirst for mastering diverse programming
								languages and modern web technologies. I am not merely an observer but
								an active participant in the ever-evolving landscape of tech, determined
								to contribute my skills and creativity to shape its future.
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='fadeIn'
							delay={240}
							className='w-44'>
							<Tooltip
								label='Check out my resume 😃'
								hasArrow
								className='text-white text-xs bg-black py-1 px-2 rounded-md font-sub'>
								<a
									onMouseEnter={() => setHovered(true)}
									onMouseLeave={() => setHovered(false)}
									href='https://drive.google.com/file/d/1vScfxIeHWuGAl3JT_EYfTj7Zy7dLCS-g/view?usp=sharing'
									target='_blank'
									className='flex gap-2 items-center bg-black font-title text-white px-4 py-2 rounded-full shadow-2xl hover:no-underline hover:bg-[#cb594c] duration-200'>
									View Resume
									<motion.div
										initial={{ x: 0 }}
										animate={{ x: hovered ? 10 : 0 }}>
										<AiOutlineArrowRight size={16} />
									</motion.div>
								</a>
							</Tooltip>
						</ScrollAnimation>
					</div>
				</div>
			</div>
		</div>
	);
};
