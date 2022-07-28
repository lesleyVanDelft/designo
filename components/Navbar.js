import Logo from './Logo';
import Hamburger from '../public/assets/shared/mobile/icon-hamburger.svg';
import CloseIcon from '../public/assets/shared/mobile/icon-close.svg';
import styles from '../styles/sass/components/Navbar.module.scss';
// import variables from '../styles/sass/variables/colors';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../hooks/useOutsideClick';

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
	const navbarRef = useRef(null);

	// Close menu on click/tap outside menu
	useOutsideClick(navbarRef, () => {
		menuActive && setMenuActive(false);
	});

	const framerVariant = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			x: 0,
			y: 157,
			transition: {
				duration: 0.6,
				type: 'spring',
				bounce: 0.5,
			},
		},
		exit: {
			opacity: 0,
			x: 500,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<nav className={styles.Navbar} ref={navbarRef}>
			<Logo />
			<div className={styles.Navbar__mobileMenuToggle}>
				<Image
					src={Hamburger}
					alt="Mobile hamburger icon"
					onClick={() => setMenuActive(!menuActive)}
				/>
			</div>

			<ul className={styles.Navbar__items}>
				<li>Our Company</li>
				<li>Locations</li>
				<li>Contact</li>
			</ul>

			<AnimatePresence exitBeforeEnter={false}>
				{menuActive && (
					<motion.ul
						className={styles.Navbar__list}
						variants={framerVariant}
						initial="hidden"
						animate="show"
						exit="exit">
						<li>Our Company</li>
						<li>Locations</li>
						<li>Contact</li>
					</motion.ul>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
