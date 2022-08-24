import Image from 'next/future/image';
import { locations } from '../public/cardData';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { scrollOnViewY } from './framerVariants';
import styles from '../styles/sass/components/LocationCards.module.scss';
import { useEffect } from 'react';
import CountryCard from './CountryCard';

const LocationCards = () => {
	return (
		<section className={`${styles.LocationCards} `}>
			{locations.map((el, i) => {
				return <CountryCard el={el} key={i} index={i} />;
			})}
		</section>
	);
};

export default LocationCards;
