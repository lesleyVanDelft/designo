import Navbar from './Navbar';

const Layout = ({ currClass, children }) => {
	return (
		<section className={currClass}>
			<section>{children}</section>
		</section>
	);
};

export default Layout;
