import Image from 'next/future/image';
import { locations } from '../public/cardData';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { scrollOnViewX, scrollOnViewXReverse } from './framerVariants';
import styles from '../styles/sass/components/LocationCards.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';

const CountryCard = ({ el, index }) => {
	const animationControl = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			animationControl.start('visible');
		}
	}, [animationControl, inView]);

	return (
		<motion.article
			className={styles.LocationCards__card}
			ref={ref}
			animate={animationControl}
			initial="hidden"
			variants={index % 2 === 0 ? scrollOnViewX : scrollOnViewXReverse}>
			<figure>
				<Image
					src={el.image}
					alt={'Image of a city landmark'}
					layout="raw"
					width={181}
					height={142}
					// priority={index === 0 && true}
				/>
			</figure>
			<h3>{el.name}</h3>
			<Link href={'/locations'}>
				<a>
					<button>See Location</button>
				</a>
			</Link>
		</motion.article>
	);
};

export default CountryCard;
