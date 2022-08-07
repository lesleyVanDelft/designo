// import Image from 'next/future/image';
import Image from 'next/image';
import styles from '../../styles/sass/components/LocationCard.module.scss';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

const LocationCard = ({ data }) => {
	// console.log(data);
	return (
		<div className={styles.LocationCard}>
			<figure className={styles.LocationCard__image}>
				<GoogleMaps location={data.location} />
			</figure>
			{/* <figure className={styles.LocationCard__image}>
				<Image
					src={data.mapImageLarge}
					alt={'image of a map'}
					// layout="raw"
					layout="responsive"
					width={375}
					height={320}
				/>
			</figure> */}

			<div className={styles.LocationCard__info}>
				<h2>{data.name}</h2>
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
	);
};

export default LocationCard;
