import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import ScrollTop from '../../components/ScrollTop';
import AppDesignSection from './AppDesignSection';
import ViewProjects from './ViewProjects';
const AppDesign = () => {
	return (
		<>
			<Navbar />
			<PageHeader
				title={'App Design'}
				text={
					'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
				}
			/>
			<AppDesignSection />
			<ViewProjects />
			<ScrollTop />
			<Footer />
		</>
	);
};

export default AppDesign;
