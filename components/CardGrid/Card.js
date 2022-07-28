import { React, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import styles from '../../styles/sass/components/Card.module.scss';

const Card = ({ title, currClass }) => {
	const [currCat, setCurrCat] = useState(currClass);

	useEffect(() => {
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
			<h2>{title}</h2>
			<button onClick={() => console.log(currClass)}>
				View Projects <FaChevronRight />
			</button>
		</article>
	);
};

export default Card;
