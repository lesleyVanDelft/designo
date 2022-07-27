import DescriptionCard from './DescriptionCard';
import circleSvg from '../../public/assets/home/desktop/bg-pattern-hero-home.svg';
import passionateSvg from '../../public/assets/home/desktop/illustration-passionate.svg';
import resourcefulSvg from '../../public/assets/home/desktop/illustration-resourceful.svg';
import friendlySvg from '../../public/assets/home/desktop/illustration-friendly.svg';
import styles from '../../styles/sass/components/DescriptionList.module.scss';

const DescriptionList = () => {
	const content = [
		{
			title: 'Passionate',
			image: passionateSvg,
			paragraph:
				'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
		},
		{
			title: 'Resourceful',
			image: resourcefulSvg,
			paragraph:
				'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
		},
		{
			title: 'Friendly',
			image: friendlySvg,
			paragraph:
				' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
		},
	];
	return (
		<div className={styles.DescriptionList}>
			{content.map((el, i) => {
				return (
					<DescriptionCard
						key={i}
						image={el.image}
						title={el.title}
						text={el.paragraph}
					/>
				);
			})}
		</div>
	);
};

export default DescriptionList;
