import { FC } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const Projects: FC = () => {
	return (
		<div
			className='bg-black w-full h-screen'
			id='projects'>
			<div className='container p-20'>
				<div className='row items-center'>
					<ScrollAnimation
						animateIn='fadeIn'
						delay={50}
						className='col col-lg-6'>
						<h1 className='text-white font-bold font-sub text-4xl'>
							Take a look at the projects I made so far
						</h1>
						<p className='font-text text-zinc-500 mt-4'>
							{" "}
							These projects are created starting from October 2022 up till today.
						</p>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
