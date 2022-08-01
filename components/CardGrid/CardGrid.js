import Card from './Card';
import { designTypes } from '../../public/cardData';
import styles from '../../styles/sass/components/CardGrid.module.scss';

const CardGrid = () => {
	// const list = [
	// 	{
	// 		title: 'Web Design',
	// 		name: 'web',
	// 	},
	// 	{
	// 		title: 'App Design',
	// 		name: 'app',
	// 	},
	// 	{
	// 		title: 'Graphic Design',
	// 		name: 'graphic',
	// 	},
	// ];

	return (
		<div className={styles.CardGrid}>
			{designTypes.map((el, i) => {
				return <Card key={i} title={el.title} currClass={el.name} />;
			})}
		</div>
	);
};

export default CardGrid;
