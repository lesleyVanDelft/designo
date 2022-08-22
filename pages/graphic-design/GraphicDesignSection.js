import DesignCardList from '../../components/DesignCardList/DesignCardList';
import PageHeader from '../../components/PageHeader';
import styles from '../../styles/sass/components/DesignSection.module.scss';
const GraphicDesignSection = () => {
	return (
		<section className={styles.DesignSection}>
			<PageHeader
				title={'Graphic Design'}
				text={
					'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
				}
			/>
			<DesignCardList page={'/graphic-design'} />;
		</section>
	);
};

export default GraphicDesignSection;
