import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollOnView } from '../framerVariants';
import { motion, useAnimation } from 'framer-motion';

import styles from '../../styles/sass/components/FlexCard.module.scss';

const FlexCard = ({ data, peach, index }) => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	const [device, setDevice] = useState();
	const [imagePath, setImagePath] = useState(data.imageMobile);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (windowSize.width < 768) {
			setDevice('mobile');
			setImagePath(data?.imageMobile);
		} else if (windowSize.width > 768 && windowSize.width < 1024) {
			setDevice('tablet');
			setImagePath(data?.imageTablet);
		} else {
			setDevice('desktop');
			setImagePath(data?.imageDesktop);
		}
	}, [data.imageDesktop, data.imageMobile, data.imageTablet, windowSize.width]);

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
			className={`${styles.FlexCard} ${
				peach ? styles.FlexCard__peach : 'lol'
			}`}>
			<figure className={`${styles.FlexCard__image}`}>
				<Image
					src={imagePath}
					alt="About us"
					layout="raw"
					// layout="fill"
					width={375}
					height={320}
					// objectFit="contain"
					priority={index === 0 ? true : false}
					quality={100}
				/>
			</figure>
			<div className={styles.FlexCard__text}>
				<h2>{data.header}</h2>
				<p>{data.text}</p>
				{data.additionalText !== undefined && <p>{data.additionalText}</p>}
			</div>
		</motion.article>
	);
};

export default FlexCard;
