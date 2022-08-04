// import Image from 'next/future/image';
import Image from 'next/image';
import styles from '../../styles/sass/components/FlexCard.module.scss';

const FlexCard = ({ data, peach, index }) => {
	return (
		<article
			className={`${styles.FlexCard} ${
				peach ? styles.FlexCard__peach : 'lol'
			}`}>
			<figure className={`${styles.FlexCard__image}`}>
				<Image
					src={data.imageMobile}
					alt="About us"
					// layout="raw"
					layout="responsive"
					width={375}
					height={320}
					priority={index === 0 && peach === true ? true : false}
					quality={1}
				/>
			</figure>
			<div className={styles.FlexCard__text}>
				<h2>{data.header}</h2>
				<p>{data.text}</p>
				{data.additionalText !== undefined && <p>{data.additionalText}</p>}
			</div>
		</article>
	);
};

export default FlexCard;
