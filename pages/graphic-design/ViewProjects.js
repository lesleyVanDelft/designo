import { useEffect, useState } from 'react';
import { designTypes } from '../../public/cardData';
import Card from '../../components/CardGrid/Card';
import styles from '../../styles/sass/components/PaddingMobile.module.scss';

const ViewProjects = () => {
	const [types, setTypes] = useState([]);

	useEffect(() => {
		designTypes && setTypes(designTypes.filter(el => el.name !== 'graphic'));
	}, []);

	return (
		<section className={` ${styles.DesignTypes} ${styles.PaddingMobile}`}>
			<div className={styles.DesignTypes__container}>
				{types.map((el, i) => {
					return (
						<Card
							key={i}
							title={el.title}
							currClass={el.name}
							linkName={`${el.name}-design`}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default ViewProjects;
