import ContactForm from './ContactForm';
import styles from '../../styles/sass/components/ContactSection.module.scss';
import LocationCards from '../../components/LocationCards';

const ContactSection = () => {
	return (
		<section className={styles.ContactSection}>
			<main className={styles.ContactSection__main}>
				<ContactForm />
			</main>
			<LocationCards />
		</section>
	);
};

export default ContactSection;
