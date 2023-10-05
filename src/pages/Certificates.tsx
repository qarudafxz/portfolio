import { FC, useEffect, useRef } from "react";
import ScrollCarousel from "scroll-carousel";
import certificates from "../data/certificates.json";

export const Certificates: FC = () => {
	const carouselRef = useRef<ScrollCarousel | null>(null);

	useEffect(() => {
		if (!carouselRef.current) {
			carouselRef.current = new ScrollCarousel("#carousel", {
				smartSpeed: true,
				direction: "ltr",
				autoplay: true,
				speed: 10,
			});
		}

		const carousel = carouselRef.current;
		if (carousel) {
			carousel.isActive;
		}
	}, []);

	return (
		<div className='w-full h-full py-36 bg-main'>
			<div>
				<h1 className='container font-bold font-sub text-2xl md:text-4xl'>
					Certificates
				</h1>
				<div className=' w-full flex mt-10'>
					<div id='carousel'>
						<div className='flex w-full'>
							{certificates?.map((cert, idx) => {
								return (
									<div
										key={idx}
										className='flex flex-col items-center justify-center bg-zinc-950 border-2 border-zinc-400 p-10 rounded-md shadow-2xl'
										style={{ width: "300px", height: "170px", margin: "10px" }}>
										<h1 className='font-bold font-sub text-2xl leading-none text-semi'>
											{cert.title}
										</h1>
										<p className='text-white mt-4 font-text text-sm md:text-xs'>
											{cert.host}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
