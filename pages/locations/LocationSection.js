import { locations } from '../../public/cardData';
import LocationCard from './LocationCard';
import styles from '../../styles/sass/components/LocationSection.module.scss';

const LocationSection = () => {
	return (
		<section className={styles.LocationSection}>
			{locations.map((el, i) => {
				return <LocationCard key={i} data={el} />;
			})}
		</section>
	);
};

export default LocationSection;
