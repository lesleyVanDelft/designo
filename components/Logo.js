import Image from 'next/image';
import styles from '../styles/sass/components/Logo.module.scss';
import logoDark from '../public/assets/shared/desktop/logo-dark.png';
const Logo = () => {
	return (
		<picture className={styles.Logo}>
			<Image
				src={logoDark}
				alt="Designo site logo"
				// height="auto"
				// className="Logo__image"
				width={202}
				height={27}
				quality={100}
			/>
			{/* <Image
				src={'/assets/shared/desktop/logo-dark.png'}
				alt="Designo site logo"
				width={202}
				height={27}
			/> */}
			{/* <source srcSet="/assets/shared/desktop/logo-dark.png" type="image/png" />
			<img
				src={'/assets/shared/desktop/logo-dark.png'}
				alt="Designo site logo"
			/> */}
		</picture>
	);
};

export default Logo;
