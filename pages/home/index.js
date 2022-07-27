import React from 'react';
import Navbar from '../../components/Navbar';
import Landing from './Landing';
import Projects from './Projects';
import Description from './Description';
import Footer from '../../components/Footer';

const Homepage = () => {
	return (
		<>
			<Navbar />
			<Landing />
			<Projects />
			<Description />
			<Footer />
		</>
	);
};

export default Homepage;
