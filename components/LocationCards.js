import Image from 'next/future/image';
import { locations } from '../public/cardData';
import styles from '../styles/sass/components/LocationCards.module.scss';

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
								width={181}
								height={142}
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
