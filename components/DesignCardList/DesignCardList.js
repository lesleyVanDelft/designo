import { webDesign } from '../../public/cardData';
import DesignCard from './DesignCard';
import styles from '../../styles/sass/components/DesignCardList.module.scss';
import { useEffect, useState } from 'react';

const DesignCardList = () => {
	return (
		<div className={styles.DesignCardList}>
			<div>
				{webDesign.map((el, i) => {
					return (
						<DesignCard
							key={i}
							title={el.title}
							image={el.image}
							text={el.text}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default DesignCardList;
