import Image from 'next/future/image';
import Navbar from '../../components/Navbar';
import FlexCard from './FlexCard';
import { aboutUs } from '../../public/cardData';
import styles from '../../styles/sass/components/FlexCard.module.scss';
import AboutSection from './AboutSection';

const About = () => {
	return (
		<>
			<Navbar />
			<AboutSection />
			{/* <FlexCard>
				<figure>
                    <Image />
                </figure>
				<div>
					<h2>{aboutUs[0].header}</h2>
					<p>{aboutUs[0].text}</p>
				</div>
			</FlexCard> */}
		</>
	);
};

export default About;
