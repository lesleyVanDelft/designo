import Image from 'next/future/image';
import styles from '../../styles/sass/components/Landing.module.scss';
import phoneImg from '../../public/assets/home/desktop/image-hero-phone.png';
import Link from 'next/link';
// google docs yellow #ffdc5b
const Landing = () => {
	return (
		<section className={styles.Landing}>
			<main className={styles.Landing__content}>
				<div>
					<h1 className={styles.Landing__heading}>
						Award-winning custom designs and digital branding solutions
					</h1>
				</div>
				<div>
					<p className={styles.Landing__text}>
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</p>
				</div>

				<Link href={'/about'}>
					<button className={styles.Landing__button}>
						<a>Learn More</a>
					</button>
				</Link>
			</main>
			<figure className={styles.Landing__image}>
				<Image
					src={phoneImg}
					alt={'Image of a mobile phone'}
					// layout="intrinsic"
					// sizes="90vw"
					width={450}
					height={660}
					layout="raw"
					// objectFit="cover"
					priority={true}
					quality={100}
				/>
			</figure>
		</section>
	);
};

export default Landing;
