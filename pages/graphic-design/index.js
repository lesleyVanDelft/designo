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
			<PageHeader
				title={'Graphic Design'}
				text={
					'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
				}
			/>
			<GraphicDesignSection />
			<ViewProjects />
			<ScrollTop />
			<Footer />
		</>
	);
};

export default GraphicDesign;
