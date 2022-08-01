import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import styles from '../../styles/sass/components/DesignCard.module.scss';

const DesignCard = ({ title, text, image }) => {
	// const [cardTitle, setCardTitle] = useState('');

	// useEffect(() => {
	// 	setCardTitle(title);
	// }, [title]);

	return (
		<article className={styles.DesignCard}>
			<figure>
				<Image
					layout="raw"
					src={image}
					alt={'Image of related webdesign project'}
					width={327}
					height={320}
				/>
			</figure>
			<h2>{title}</h2>
		</article>
	);
};

export default DesignCard;
