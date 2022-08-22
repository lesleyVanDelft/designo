import DesignCardList from '../../components/DesignCardList/DesignCardList';
import PageHeader from '../../components/PageHeader';
import styles from '../../styles/sass/components/DesignSection.module.scss';
// import styles from '../../styles/sass/components/PaddingMobile.module.scss';

const AppDesignSection = () => {
	return (
		<section className={styles.DesignSection}>
			<PageHeader
				title={'App Design'}
				text={
					'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
				}
			/>
			<DesignCardList page="/app-design" />
		</section>
	);
};

export default AppDesignSection;
