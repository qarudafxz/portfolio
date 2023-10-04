import { FC } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export const SkillsMarquee: FC = () => {
	return (
		<Marquee
			speed={95}
			gradientWidth={25}
			className='bg-black p-14'>
			{skills.map((skill, idx: number) => {
				return (
					<motion.div
						whileHover={{ scale: 1.2 }}
						key={idx}
						className='mx-14'>
						<div className='flex gap-4 items-center'>
							{skill.icon}
							<span className='text-white text-2xl font-sub'>{skill.label}</span>
						</div>
					</motion.div>
				);
			})}
		</Marquee>
	);
};
