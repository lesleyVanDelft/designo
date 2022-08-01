import DesignCardList from '../../components/DesignCardList/DesignCardList';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import { webDesign } from '../../public/cardData';
import ViewProjects from './ViewProjects';
import WebDesignSection from './WebDesignSection';
import Footer from '../../components/Footer';
import ScrollTop from '../../components/ScrollTop';

const WebDesign = () => {
	return (
		<>
			<Navbar />
			<PageHeader
				title="Web Design"
				text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
			/>
			<WebDesignSection />
			<ViewProjects />
			<ScrollTop />
			<Footer />
		</>
	);
};

export default WebDesign;
