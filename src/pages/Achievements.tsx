import { FC, useState, useEffect } from "react";
import { AchievementCard } from "../components/AchievementCard";

type Achievements = {
	title: string;
	desc: string;
};

export const Achievements: FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [dots, setDots] = useState<string[]>([".", ".", ".", ".", "."]);
	const [index, setIndex] = useState<number>(0);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const ach: Array<Achievements> = [
		{
			title: "3rd Placer Galileo Hackathon",
			desc:
				"Unexpectedly won with our solution - I AM SAFE: A IoT arduino-based device that detects an immediate flood",
		},
		{
			title: "DICT Diagnostic Exam Passer",
			desc:
				"Took the test for experience but unexpectedly passed the diagnostic exam.",
		},
		{
			title: "1st Place Regional Startup Competition",
			desc: "Biggest achievement so far.",
		},
		{
			title: "College-wide T-shirt Design Contest 1st runner up",
			desc: "Was the representative in our college",
		},
		{
			title: "Consistent Dean's Lister",
			desc: "Grinding on academics every minute every second every hour",
		},
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % dots.length);
			setActiveIndex((prevIndex) => (prevIndex + 1) % ach.length);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [dots]);

	return (
		<div
			id='achievements'
			className='bg-main w-full xxxs:h-[2140px] md:h-[900px] lg:h-screen'>
			<div className='container'>
				<h1 className='text-center font-sub text-5xl'>
					What I've achieved so far
					{dots.map((dot, i) => (
						<span
							key={i}
							style={{
								opacity: index === i ? 1 : 0.2,
								transition: "opacity 0.5s ease-in-out",
							}}>
							{dot}
						</span>
					))}
				</h1>
				<div className='row mt-16 xxxs:gap-8 md:gap-0'>
					{ach.map((item, idx) => {
						return (
							<div
								key={idx}
								className='col md:col-lg-10 lg:col-span-1'>
								<AchievementCard
									key={idx}
									idx={idx}
									activeIndex={activeIndex}
									title={item.title}
									desc={item.desc}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
