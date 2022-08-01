import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styles from '../styles/sass/components/ScrollTop.module.scss';
import { motion } from 'framer-motion';
const ScrollTop = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 150) {
				setActive(true);
			} else {
				setActive(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className={`${active ? styles.ScrollTopActive : styles.ScrollTop}`}
			onClick={scrollToTop}>
			<BsFillArrowUpCircleFill />
		</button>
	);
};

export default ScrollTop;
