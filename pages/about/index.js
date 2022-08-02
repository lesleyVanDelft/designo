import Image from 'next/future/image';
import Navbar from '../../components/Navbar';
import FlexCard from './FlexCard';
import { aboutUs } from '../../public/cardData';
import styles from '../../styles/sass/components/FlexCard.module.scss';
import AboutSection from './AboutSection';
import ScrollTop from '../../components/ScrollTop';
import Footer from '../../components/Footer';

const About = () => {
	return (
		<>
			<Navbar />
			<AboutSection />
			<ScrollTop />
			<Footer />
		</>
	);
};

export default About;
