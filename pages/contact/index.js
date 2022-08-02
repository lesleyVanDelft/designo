import Navbar from '../../components/Navbar';
import ScrollTop from '../../components/ScrollTop';
import Footer from '../../components/Footer';
import ContactSection from './ContactSection';
import LocationCards from '../../components/LocationCards';
const Contact = () => {
	return (
		<>
			<Navbar />
			<ContactSection />
			{/* <LocationCards /> */}
			<ScrollTop />
			<Footer />
		</>
	);
};

export default Contact;
