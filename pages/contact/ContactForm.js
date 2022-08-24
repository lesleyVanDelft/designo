import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollOnView } from '../../components/framerVariants';
import { motion, useAnimation } from 'framer-motion';
import styles from '../../styles/sass/components/ContactForm.module.scss';

const ContactForm = () => {
	const [submitting, setSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setSubmitting(true);
		setSubmitSuccess(false);

		setTimeout(() => {
			setSubmitting(false);
			setSubmitSuccess(true);
		}, 2000);
	};

	const animationControl = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			animationControl.start('visible');
		}
	}, [animationControl, inView]);

	return (
		<motion.form
			className={styles.ContactForm}
			autoComplete="off"
			ref={ref}
			animate={animationControl}
			initial="hidden"
			variants={scrollOnView}>
			<div className={styles.ContactForm__text}>
				<h2>Contact Us</h2>
				<p>
					Ready to take it to the next level? Let&apos;s talk about your project
					or idea and find out how we can help your business grow. If you are
					looking for unique digital experiences that&apos;s relatable to your
					users, drop us a line.
				</p>
			</div>
			<input type="text" placeholder="Name" autoComplete={'none'} />
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Email Address"
				autoComplete={'off'}
			/>
			<input
				type="number"
				name="phone"
				id="phone"
				placeholder="Phone"
				autoComplete={'off'}
			/>
			<textarea
				name="message"
				id="message"
				placeholder="Your Message"
				rows={6}
			/>
			<button onClick={handleSubmit}>
				{!submitting && !submitSuccess && 'Submit'}
				{submitting && !submitSuccess && 'Submitting...'}
				{submitSuccess && !submitting && 'Submitted!'}
			</button>
		</motion.form>
	);
};

export default ContactForm;
