import { useState } from 'react';
import LocationCards from '../../components/LocationCards';
import { aboutUs } from '../../public/cardData';
import FlexCard from './FlexCard';
import styles from '../../styles/sass/components/AboutSection.module.scss';

const AboutSection = () => {
	const aboutUsTop = aboutUs.filter(el => el.header !== 'The real deal');
	const aboutUsBot = aboutUs.filter(el => el.header === 'The real deal');

	return (
		<section className={styles.AboutSection}>
			{aboutUsTop.map((el, i) => {
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

			{aboutUsBot.map((el, i) => {
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
