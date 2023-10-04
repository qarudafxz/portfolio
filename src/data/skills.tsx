import {
	SiTypescript,
	SiExpress,
	SiMongodb,
	SiVite,
	SiTailwindcss,
	SiSocketdotio,
	SiAdobephotoshop,
	SiFigma,
} from "react-icons/si";
import { FaReact, FaLaravel } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";

export const skills = [
	{ label: "React", icon: <FaReact className='text-2xl text-[#cb594c]' /> },
	{
		label: "TypeScript",
		icon: <SiTypescript className='text-2xl text-[#cb594c]' />,
	},
	{ label: "Express", icon: <SiExpress className='text-2xl text-[#cb594c]' /> },
	{ label: "MongoDB", icon: <SiMongodb className='text-2xl text-[#cb594c]' /> },
	{ label: "Vite", icon: <SiVite className='text-2xl text-[#cb594c]' /> },
	{
		label: "TailwindCSS",
		icon: <SiTailwindcss className='text-2xl text-[#cb594c]' />,
	},
	{ label: "Laravel", icon: <FaLaravel className='text-2xl text-[#cb594c]' /> },
	{
		label: "PostgreSQL",
		icon: <BiLogoPostgresql className='text-2xl text-[#cb594c]' />,
	},
	{
		label: "Bootstrap",
		icon: <BsBootstrapFill className='text-2xl text-[#cb594c]' />,
	},
	{
		label: "Socket IO",
		icon: <SiSocketdotio className='text-2xl text-[#cb594c]' />,
	},
	{
		label: "Figma",
		icon: <SiFigma className='text-2xl text-[#cb594c]' />,
	},
	{
		label: "Photoshop",
		icon: <SiAdobephotoshop className='text-2xl text-[#cb594c]' />,
	},
];
