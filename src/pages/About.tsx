import { FC, useState } from "react";
import me from "../assets/me.webp";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About: FC = () => {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<div
			id='about'
			className='w-full p-4 bg-main xxxs:h-[1100px] lg:h-screen'>
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
							delay={180}>
							<iframe
								className='rounded-md my-4'
								src='https://open.spotify.com/embed/track/5sdQOyqq2IDhvmx2lHOpwd?utm_source=generator&theme=0'
								width='100%'
								height='152'
								allow='autoplay	*; encrypted-media *; fullscreen *; picture-in-picture *;'
								loading='lazy'
							/>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='fadeIn'
							delay={250}>
							<p className='font-text text-left pb-6 xxxs:text-xs md:text-md lg:text-sm xl:text-lg'>
								I am a 21-year-old Tech with an insatiable appetite for knowledge and a
								boundless passion for the world of technology. My unwavering motivation
								and unrelenting optimism define me as a student constantly hungry to
								delve deeper into the intricacies of the Tech Industry.
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='fadeIn'
							delay={340}
							className='w-44'>
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
						</ScrollAnimation>
					</div>
				</div>
			</div>
		</div>
	);
};
