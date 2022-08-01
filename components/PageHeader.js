import styles from '../styles/sass/components/PageHeader.module.scss';

const PageHeader = ({ title, text }) => {
	return (
		<div className={styles.PageHeader}>
			<div className={styles.PageHeader__text}>
				<h1>{title}</h1>

				<p>{text}</p>
			</div>
		</div>
	);
};

export default PageHeader;
