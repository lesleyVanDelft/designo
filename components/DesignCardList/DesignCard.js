import Image from 'next/future/image';
import styles from '../../styles/sass/components/DesignCard.module.scss';

const DesignCard = ({ title, text, image, index }) => {
	return (
		<article className={styles.DesignCard}>
			<figure className={styles.DesignCard__image}>
				<Image
					layout="raw"
					src={image}
					alt={'Image of related webdesign project'}
					width={327}
					height={320}
					priority={index === 0 ? true : false}
				/>
			</figure>
			<div className={styles.DesignCard__text}>
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</article>
	);
};

export default DesignCard;
