import Logo from '../../components/Logo';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/sass/components/Landing.module.scss';
import Image from 'next/image';
import phoneImg from '../../public/assets/home/desktop/image-hero-phone.png';
import Landing from './Landing';
import Projects from './Projects';
import Description from './Description';
import Footer from '../../components/Footer';

const Homepage = () => {
	return (
		// <div className={styles.Homepage}>
		<>
			<Navbar />
			<Landing />
			<Projects />
			<Description />
			<Footer />
		</>
		// </div>
	);
};

export default Homepage;
