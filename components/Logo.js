import Image from 'next/image';
import styles from '../styles/sass/components/Logo.module.scss';
import logoDark from '../public/assets/shared/desktop/logo-dark.png';
import Link from 'next/link';
const Logo = () => {
	return (
		<picture className={styles.Logo}>
			<Link href={'/home'}>
				<a>
					<Image
						src={logoDark}
						alt="Designo site logo"
						width={202}
						height={27}
						quality={100}
						priority={true}
					/>
				</a>
			</Link>
		</picture>
	);
};

export default Logo;
