import Image from 'next/future/image';
import styles from '../../styles/sass/components/LocationCard.module.scss';

const LocationCard = ({ data }) => {
	return (
		<div className={styles.LocationCard}>
			<div>
				<figure className={styles.LocationCard__image}>
					<Image
						src={data.mapImageLarge}
						alt={'image of a map'}
						layout="raw"
						width={375}
						height={320}
					/>
				</figure>
			</div>
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
