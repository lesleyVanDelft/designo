import Image from 'next/future/image';
import styles from '../../styles/sass/components/Landing.module.scss';
import phoneImg from '../../public/assets/home/desktop/image-hero-phone.png';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollOnView } from '../../components/framerVariants';
import { motion, useAnimation } from 'framer-motion';
// google docs yellow #ffdc5b
const Landing = () => {
	const animationControl = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			animationControl.start('visible');
		}
	}, [animationControl, inView]);

	return (
		<motion.section
			className={styles.Landing}
			ref={ref}
			animate={animationControl}
			initial="hidden"
			variants={scrollOnView}>
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
		</motion.section>
	);
};

export default Landing;
