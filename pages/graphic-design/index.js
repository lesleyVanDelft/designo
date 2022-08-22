import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import ScrollTop from '../../components/ScrollTop';
import GraphicDesignSection from './GraphicDesignSection';
import ViewProjects from './ViewProjects';

const GraphicDesign = () => {
	return (
		<>
			<Navbar />
			<GraphicDesignSection />
			<ViewProjects />
			<ScrollTop />
			<Footer />
		</>
	);
};

export default GraphicDesign;
