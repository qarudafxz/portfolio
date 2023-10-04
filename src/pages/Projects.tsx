import { FC } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";

import cafefy from "../assets/projects/cafefy.png";
import pinpal from "../assets/projects/pinpals.png";
import student from "../assets/projects/student.png";
import ccislsg from "../assets/projects/ccislsg.png";

export const Projects: FC = () => {
	return (
		<div
			className='bg-black w-full'
			id='projects'>
			<div className='container'>
				<div className='row items-center'>
					<ScrollAnimation
						animateIn='fadeIn'
						delay={50}
						className='col col-lg-6 p-20'>
						<h1 className='text-white font-bold font-sub xxxs:text-2xl md:text-4xl'>
							Take a look at the projects I made so far
						</h1>
						<p className='font-text text-zinc-500 mt-4'>
							{" "}
							These projects are full-stack web applications that I made for
						</p>
					</ScrollAnimation>
				</div>
				{/* First row */}
				<div className='xxxs:flex flex-col'>
					<div className='row '>
						{/* Start of cafefy */}
						<div className='col col-lg-5 relative group'>
							<div
								className='bg-[#915032] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={cafefy}
									alt='cafefy'
									className='w-full h-full shadow-2xl transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-2 font-head'>Cafefy</h2>
								<p className='text-sm'>A little description of the project.</p>
								<a
									href='https://cafefy.francistinao.tech/'
									target='_blank'
									className='bg-black px-3 py-2 rounded-md text-white font-text mt-4 hover:no-underline hover:text-[#cb594c]'>
									View Site
								</a>
							</div>
						</div>
						{/* End of Cafefy */}
						{/* Start of Pinpal */}
						<div className='col col-lg-7 relative group'>
							<div
								className='bg-[#6cb1ff] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={pinpal}
									alt='pinpal'
									className='w-full shadow-2xl h-75% transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-2 font-head'>Pinpal</h2>
								<p className='text-sm'>A little description of the project.</p>
								<a
									href='https://pinpals.vercel.app/'
									target='_blank'
									className='bg-black px-3 py-2 rounded-md text-white font-text mt-4 hover:no-underline hover:text-[#cb594c]'>
									View Site
								</a>
							</div>
						</div>
						{/* End of Pinpal */}
					</div>
					{/* End of first row */}
					{/* Second row */}
					<div className='row xxxs:-mt-12 lg:-mt-[124px]'>
						{/* Student anon */}
						<div className='col col-lg-7 relative group'>
							<div
								className='bg-[#eaa0ff] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={student}
									alt='student anon'
									className='w-full h-75% transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-2 font-head'>Pinpal</h2>
								<p className='text-sm'>A little description of the project.</p>
								<a
									href='https://pinpals.vercel.app/'
									target='_blank'
									className='bg-black px-3 py-2 rounded-md text-white font-text mt-4 hover:no-underline hover:text-[#cb594c]'>
									View Site
								</a>
							</div>
						</div>
						{/* End of student anon */}
						{/* CCISLSG */}
						<div className='col col-lg-5 relative group'>
							<div
								className='bg-[#ffb896] w-full rounded-md shadow-xl overflow-hidden'
								style={{
									height: "70%",
								}}>
								<img
									src={ccislsg}
									alt='ccislsg'
									className='w-full h-full transform scale-100 group-hover:scale-110 transition-transform'
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
							<div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 bg-opacity-75 bg-black text-white flex flex-col justify-center items-center transition-opacity duration-300'>
								<h2 className='text-xl font-bold mb-2 font-head'>
									CCISLSG Suggestion Board
								</h2>
								<p className='text-sm'>A little description of the project.</p>
								<a
									href='https://suggestion-board.ccislsg.com/'
									target='_blank'
									className='bg-black px-3 py-2 rounded-md text-white font-text mt-4 hover:no-underline hover:text-[#cb594c]'>
									View Site
								</a>
							</div>
						</div>
						{/* End of CCISLSG */}
					</div>
				</div>
			</div>
		</div>
	);
};
