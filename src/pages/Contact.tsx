import { FC } from "react";
import logo from "../assets/logo.svg";

export const Contact: FC = () => {
	return (
		<div
			className='bg-black w-full h-screen'
			id='contact'>
			<div className='container xxxs:py-10 lg:py-24'>
				<div className='flex justify-center'>
					<h1 className='font-sub text-main font-bold xxxs:text-4xl md:text-6xl lg:text-[130px]'>
						GET IN
					</h1>
					<img
						src={logo}
						className='md:w-32 h-auto'
					/>
					<h1 className='font-sub text-main font-bold xxxs:text-4xl md:text-6xl lg:text-[130px]'>
						TOUCH
					</h1>
				</div>
			</div>
		</div>
	);
};
