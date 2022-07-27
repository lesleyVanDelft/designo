import Image from 'next/future/image';
// import Image from 'next/image';
import circleSvg from '../../public/assets/home/desktop/bg-pattern-hero-home.svg';
import passionateSvg from '../../public/assets/home/desktop/illustration-passionate.svg';
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
					// layout="fill"
					layout="raw"
					// objectFit="contain"
					// quality={100}
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
