import { locations } from '../../public/cardData';
// import LocationCard from './LocationCard';
import styles from '../../styles/sass/components/LocationSection.module.scss';
// import LocationCards from '../../components/LocationCards';
import LocationCard from '../../components/LocationCard/LocationCard';

const LocationSection = () => {
	return (
		<section className={styles.LocationSection}>
			{locations.map((el, i) => {
				return <LocationCard key={i} data={el} />;
			})}
		</section>

		// <section className={styles.LocationSection}>
		// 	<LocationCards />
		// </section>
	);
};

export default LocationSection;
