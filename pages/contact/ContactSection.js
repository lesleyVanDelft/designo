import ContactForm from './ContactForm';
import styles from '../../styles/sass/components/ContactSection.module.scss';
import LocationCards from '../../components/LocationCards';

const ContactSection = () => {
	return (
		<section className={styles.ContactSection}>
			<ContactForm />
			<LocationCards />
		</section>
	);
};

export default ContactSection;
