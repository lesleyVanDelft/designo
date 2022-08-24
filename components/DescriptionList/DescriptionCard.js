import Image from 'next/future/image';
import {
	scrollOnViewX,
	scrollOnView,
	scrollOnViewY,
	scrollOnViewXReverse,
} from '../framerVariants';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/sass/components/DescriptionCard.module.scss';
import { useEffect } from 'react';

const DescriptionCard = ({ image, title, text, index }) => {
	const animationControl = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			animationControl.start('visible');
		}
	}, [animationControl, inView]);

	return (
		<motion.article
			className={styles.DescriptionCard}
			ref={ref}
			animate={animationControl}
			initial="hidden"
			variants={index % 2 === 0 ? scrollOnViewX : scrollOnViewXReverse}>
			<div className={styles.DescriptionCard__imageContainer}>
				<Image
					src={image}
					alt={'friendly man'}
					height={202}
					width={202}
					layout="raw"
				/>
			</div>
			<div className={styles.DescriptionCard__textContainer}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</motion.article>
	);
};

export default DescriptionCard;
