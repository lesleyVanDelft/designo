import Image from 'next/future/image';
import styles from '../../styles/sass/components/DescriptionCard.module.scss';

const DescriptionCard = ({ image, title, text }) => {
	return (
		<article className={styles.DescriptionCard}>
			<div className={styles.DescriptionCard__imageContainer}>
				<Image
					src={image}
					alt={'friendly man'}
					height={202}
					width={202}
					layout="raw"
				/>
			</div>
			<div className={styles.DescriptionCard__textContainer}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</article>
	);
};

export default DescriptionCard;
