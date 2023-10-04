import { ReactNode } from "react";
import { useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
	const windowSize = useWindowSize();

	const scrollingContainerRef = useRef<HTMLDivElement>(null);

	const data = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0,
	};

	useEffect(() => {
		setBodyHeight();
	}, [windowSize.height]);

	const setBodyHeight = () => {
		if (scrollingContainerRef.current) {
			document.body.style.height = `${
				//adjust later the height
				scrollingContainerRef.current.getBoundingClientRect().height + 1200
			}px`;
		}
	};

	useEffect(() => {
		requestAnimationFrame(() => smoothScrollingHandler());
	}, []);

	const smoothScrollingHandler = () => {
		data.current = window.scrollY;
		data.previous += (data.current - data.previous) * data.ease;
		data.rounded = Math.round(data.previous * 100) / 100;

		if (scrollingContainerRef.current) {
			scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
		}

		// Recursive call
		requestAnimationFrame(() => smoothScrollingHandler());
	};

	return (
		<div className='parent'>
			<div ref={scrollingContainerRef}>{children}</div>
		</div>
	);
};

export default SmoothScroll;
