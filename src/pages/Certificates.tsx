import { FC } from "react";
import certificates from "../data/certificates.json";
import Marquee from "react-fast-marquee";

export const Certificates: FC = () => {
	return (
		<div className='w-full h-full py-36 bg-main'>
			<div className='relative'>
				<h1 className='container font-bold font-sub text-2xl md:text-4xl'>
					Certificates
				</h1>
				<div className='mt-10'>
					<Marquee
						speed={60}
						className='flex'>
						{certificates.map((cert, idx) => (
							<div
								className='flex bg-zinc-950 border-2 border-zinc-400 rounded-md shadow-2xl mr-3'
								key={idx}>
								<div className='w-64 h-64 flex flex-col items-center justify-center text-center p-6'>
									<h1 className='font-bold font-sub text-2xl leading-none text-semi'>
										{cert.title}
									</h1>
									<p className='text-white mt-4 font-text text-sm md:text-xs'>
										{cert.host}
									</p>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
};
