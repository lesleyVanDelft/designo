import { useEffect, useState } from 'react';
import LocationCards from '../../components/LocationCards';
import { aboutUs } from '../../public/cardData';
// import FlexCard from './FlexCard';
import FlexCard from '../../components/FlexCard/FlexCard';
import styles from '../../styles/sass/components/AboutSection.module.scss';
// import cardStyles from '../../styles/sass/components/FlexCard.module.scss';

const AboutSection = () => {
	const [aboutTop, setAboutTop] = useState([]);
	const [aboutBot, setAboutBot] = useState([]);

	useEffect(() => {
		setAboutTop(aboutUs.filter(el => el.header !== 'The real deal'));
		setAboutBot(aboutUs.filter(el => el.header === 'The real deal'));
	}, []);

	// const aboutUsTop = aboutUs.filter(el => el.header !== 'The real deal');
	// const aboutUsBot = aboutUs.filter(el => el.header === 'The real deal');

	return (
		<section className={styles.AboutSection}>
			{aboutTop.map((el, i) => {
				return (
					<FlexCard
						key={i}
						data={el}
						peach={i === 0 ? true : false}
						index={i}
					/>
				);
			})}

			<LocationCards />

			{aboutBot.map((el, i) => {
				return (
					<FlexCard
						key={i}
						data={el}
						index={i}
						peach={false}
						additionalText={el.additionalText}
					/>
				);
			})}
		</section>
	);
};

export default AboutSection;
