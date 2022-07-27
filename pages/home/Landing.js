import Image from 'next/image';
import styles from '../../styles/sass/components/Landing.module.scss';
import phoneImg from '../../public/assets/home/desktop/image-hero-phone.png';

const Landing = () => {
	return (
		<section className={styles.Landing}>
			<main>
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

				<button className={styles.Landing__button}>Learn More</button>

				<figure className={styles.Landing__image}>
					<Image
						src={phoneImg}
						alt={'Image of a mobile phone'}
						// layout="intrinsic"
						// sizes="90vw"
						// width={450}
						// height={660}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
				</figure>
			</main>
		</section>
	);
};

export default Landing;
