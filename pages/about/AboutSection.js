import Image from 'next/future/image';
import LocationCards from '../../components/LocationCards';
import { aboutUs, locations } from '../../public/cardData';
import FlexCard from './FlexCard';

const AboutSection = () => {
	return (
		<>
			{aboutUs
				.filter(el => el.header !== 'The real deal')
				.map((el, i) => {
					return <FlexCard key={i} data={el} index={i} />;
				})}

			<LocationCards />
		</>
	);
};

export default AboutSection;
