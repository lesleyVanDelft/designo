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
			<ScrollTop />
			<Footer contactPage={true} />
		</>
	);
};

export default Contact;
