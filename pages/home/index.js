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
			<Projects />
			<Description />
			<ScrollTop />
			<Footer />
		</>
	);
};

export default Homepage;
