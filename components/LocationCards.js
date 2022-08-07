import Image from 'next/future/image';
// import Image from 'next/image';
import { locations } from '../public/cardData';
import styles from '../styles/sass/components/LocationCards.module.scss';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import LocationCard from './LocationCard/LocationCard';

const LocationCards = () => {
	return (
		<section className={`${styles.LocationCards} `}>
			{locations.map((el, i) => {
				return (
					<article key={i} className={styles.LocationCards__card}>
						<figure>
							<Image
								src={el.image}
								alt={'Image of a city landmark'}
								layout="raw"
								width={181}
								height={142}
								priority={i === 0 && true}
							/>
						</figure>
						<h3>{el.name}</h3>
						<button>See Location</button>
					</article>
				);
			})}
		</section>
	);
};

export default LocationCards;
