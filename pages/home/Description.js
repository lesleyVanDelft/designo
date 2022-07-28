import DescriptionList from '../../components/DescriptionList/DescriptionList';
import Layout from '../../components/Layout';
import styles from '../../styles/sass/components/DescriptionSection.module.scss';
const Description = () => {
	return (
		// <Layout currClass={styles.DescriptionSection}>
		<section className={styles.DescriptionSection}>
			<DescriptionList />
		</section>
		// </Layout>
	);
};

export default Description;
