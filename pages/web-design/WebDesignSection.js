import DesignCardList from '../../components/DesignCardList/DesignCardList';
import PageHeader from '../../components/PageHeader';
import styles from '../../styles/sass/components/DesignSection.module.scss';

const WebDesignSection = () => {
	return (
		<section className={styles.DesignSection}>
			<PageHeader
				title="Web Design"
				text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
			/>
			<DesignCardList page={'/web-design'} />
		</section>
	);
};

export default WebDesignSection;
