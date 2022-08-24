import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { scrollOnView } from '../framerVariants';
import styles from '../../styles/sass/components/LocationCard.module.scss';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

const LocationCard = ({ data }) => {
	const animationControl = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			animationControl.start('visible');
		}
	}, [animationControl, inView]);
	return (
		<motion.div
			className={styles.LocationCard}
			ref={ref}
			animate={animationControl}
			initial="hidden"
			variants={scrollOnView}>
			<div className={styles.LocationCard__map}>
				<GoogleMaps location={data.location} />
			</div>

			<div className={styles.LocationCard__info}>
				<h2>{data.name}</h2>
				<div className={styles.LocationCard__info_lists}>
					<ul>
						<li>{data.address.name}</li>
						<li>{data.address.street}</li>
						<li>{data.address.location}</li>
					</ul>
					<ul>
						<li>Contact</li>
						<li>{data.contact.phone}</li>
						<li>{data.contact.email}</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default LocationCard;
