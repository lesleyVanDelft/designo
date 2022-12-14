import { React, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { scrollOnView } from '../framerVariants';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import styles from '../../styles/sass/components/Card.module.scss';

const Card = ({ title, currClass, linkName }) => {
	const [currCat, setCurrCat] = useState(currClass);
	const [linkTo, setLinkTo] = useState(linkName);

	useEffect(() => {
		if (currClass === 'web') {
			setCurrCat(styles.Card__web);
		}

		if (currClass === 'app') {
			setCurrCat(styles.Card__app);
		}

		if (currClass === 'graphic') {
			setCurrCat(styles.Card__graphic);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (linkName === '/web-design') {
			setLinkTo('/web-design');
		}

		if (linkName === '/app-design') {
			setLinkTo('/app-design');
		}

		if (linkName === '/graphic-design') {
			setLinkTo('/graphic-design');
		}
	}, [linkName]);

	const animationControl = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			animationControl.start('visible');
		}
	}, [animationControl, inView]);

	return (
		<motion.article
			ref={ref}
			animate={animationControl}
			initial="hidden"
			variants={scrollOnView}
			className={`${currCat}`}>
			<h2>{title}</h2>
			<button>
				<Link href={`${linkTo}`}>
					<a>
						View Projects <FaChevronRight />
					</a>
				</Link>
			</button>
		</motion.article>
	);
};

export default Card;
