import styles from '../styles/sass/components/TalkAbout.module.scss';
const TalkAbout = () => {
	return (
		<div className={styles.TalkAbout}>
			<div className={styles.TalkAbout__text}>
				<h2>Lets talk about your project.</h2>
				<p>
					Ready to take it to the next level? Contact us today and find out how
					our expertise can help your business grow.
				</p>
			</div>

			<button className={styles.TalkAbout__button}>Get in touch</button>
		</div>
	);
};

export default TalkAbout;
