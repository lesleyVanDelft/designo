import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Landing from './Landing';
import Projects from './Projects';
import Description from './Description';
import Footer from '../../components/Footer';
import ScrollTop from '../../components/ScrollTop';

const Homepage = () => {
	return (
		<>
			<Navbar />
			<Landing />
			<main>
				<Projects />
				<Description />
			</main>
			<ScrollTop />
			<Footer />
		</>
	);
};

export default Homepage;
