// import Image from 'next/future/image';
import Image from 'next/image';
import styles from '../../styles/sass/components/LocationCard.module.scss';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

const LocationCard = ({ data }) => {
	// console.log(data);
	return (
		<div className={styles.LocationCard}>
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
		</div>
	);
};

export default LocationCard;
