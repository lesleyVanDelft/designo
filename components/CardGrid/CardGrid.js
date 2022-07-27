import Card from './Card';
import styles from '../../styles/sass/components/CardGrid.module.scss';

const CardGrid = () => {
	const list = [
		{
			title: 'Web Design',
			name: 'web',
		},
		{
			title: 'App Design',
			name: 'app',
		},
		{
			title: 'Graphic Design',
			name: 'graphic',
		},
	];

	return (
		<div className={styles.CardGrid}>
			{/* <Card title={'Web Design'} currClass={'web'} />
			<Card title={'App Design'} currClass={'app'} />
			<Card title={'Graphic Design'} currClass={'graphic'} /> */}
			{/* {list.map((crd, i) => {
				return <Card key={i} currClass={crd}/>
			})} */}
			{list.map((el, i) => {
				return <Card key={i} title={el.title} currClass={el.name} />;
			})}

			{/* <Card>
				<h2>Web Design</h2>
				<button onClick={() => console.log(currClass)}>View Projects </button>
			</Card>
			<Card>
				<h2>App Design</h2>
				<button onClick={() => console.log(currClass)}>View Projects </button>
			</Card>
			<Card>
				<h2>Graphic Design</h2>
				<button onClick={() => console.log(currClass)}>View Projects </button>
			</Card> */}
		</div>
	);
};

export default CardGrid;
