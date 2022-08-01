import { webDesign, appDesign, graphicDesign } from '../../public/cardData';
import DesignCard from './DesignCard';
import styles from '../../styles/sass/components/DesignCardList.module.scss';
import { useEffect, useState } from 'react';

const DesignCardList = ({ page }) => {
	return (
		<div className={styles.DesignCardList}>
			<div>
				{page === '/web-design' &&
					webDesign.map((el, i) => {
						return (
							<DesignCard
								key={i}
								title={el.title}
								image={el.image}
								text={el.text}
								index={i}
							/>
						);
					})}

				{page === '/app-design' &&
					appDesign.map((el, i) => {
						return (
							<DesignCard
								key={i}
								title={el.title}
								image={el.image}
								text={el.text}
								index={i}
							/>
						);
					})}

				{page === '/graphic-design' &&
					graphicDesign.map((el, i) => {
						return (
							<DesignCard
								key={i}
								title={el.title}
								image={el.image}
								text={el.text}
								index={i}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default DesignCardList;
