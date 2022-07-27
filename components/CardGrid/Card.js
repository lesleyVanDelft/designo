import { React, useEffect, useState } from 'react';
import styles from '../../styles/sass/components/Card.module.scss';

const Card = ({ title, currClass, children }) => {
	const [currCat, setCurrCat] = useState(currClass);

	useEffect(() => {
		// setCurrCat(currClass);
		if (currClass === 'web') {
			setCurrCat(styles.Card__web);
		}

		if (currClass === 'app') {
			setCurrCat(styles.Card__app);
		}

		if (currClass === 'graphic') {
			setCurrCat(styles.Card__graphic);
		}
	}, []);

	return (
		<article className={`${currCat}`}>
			{/* <article> */}
			<h2>{title}</h2>

			<button onClick={() => console.log(currClass)}>View Projects </button>
		</article>
	);
};

export default Card;
