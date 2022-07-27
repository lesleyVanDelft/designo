import CardGrid from '../../components/CardGrid/CardGrid';
import Layout from '../../components/Layout';
import styles from '../../styles/sass/components/Projects.module.scss';

const Projects = () => {
	return (
		<Layout currClass={styles.Projects}>
			<CardGrid />
		</Layout>
	);
};

export default Projects;
