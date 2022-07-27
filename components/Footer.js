import logo from '../public/assets/shared/desktop/logo-light.png';
import facebookIcon from '../public/assets/shared/desktop/icon-facebook.svg';
import youtubeIcon from '../public/assets/shared/desktop/icon-youtube.svg';
import twitterIcon from '../public/assets/shared/desktop/icon-twitter.svg';
import pinterestIcon from '../public/assets/shared/desktop/icon-pinterest.svg';
import instagramIcon from '../public/assets/shared/desktop/icon-instagram.svg';
import Image from 'next/future/image';
import styles from '../styles/sass/components/Footer.module.scss';
import TalkAbout from './TalkAbout';

const Footer = () => {
	const iconList = [
		facebookIcon,
		youtubeIcon,
		twitterIcon,
		pinterestIcon,
		instagramIcon,
	];
	return (
		<footer className={styles.Footer}>
			<TalkAbout />
			<div className={styles.Footer__image}>
				<Image
					src={logo}
					alt="designo logo"
					layout="raw"
					width={202}
					height={27}
					quality={100}
				/>
			</div>

			<div className={styles.Footer__content}>
				<ul>
					<li>Our Company</li>
					<li>Locations</li>
					<li>Contact</li>
				</ul>

				<div className={styles.text}>
					<h3>Designo Central Office</h3>
					<p>3886 Wellington Street</p>
					<p>Toronto, Ontario M9C 3J5</p>
				</div>

				<div className={styles.text}>
					<h3>Contact Us (Central Office)</h3>
					<p>P : +1 253-863-8967</p>
					<p>M : contact@designo.co</p>
				</div>

				<div className={styles.icons}>
					{iconList.map((el, i) => {
						return (
							<Image
								key={i}
								src={el}
								alt="Social media icon"
								layout="raw"
								width={24}
								height={24}
								quality={100}
							/>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
