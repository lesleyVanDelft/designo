// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import { MarkerF } from '@react-google-maps/api';
// import { useMemo } from 'react';
// const Test = () => {
// 	const { isLoaded } = useLoadScript({
// 		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
// 	});

import { useState } from 'react';

// 	if (!isLoaded) return <div>loading...</div>;
// 	return <Map />;
// };

// export default Test;

const Map = () => {
	// const center = useMemo(() => ({ lat: 51.65458, lng: 4.86995 }), []);
	// return (
	// 	<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
	// 		<MarkerF position={center} />
	// 	</GoogleMap>
	// );
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="dialog-container">
				<dialog open={open && true}>
					<ul>
						<li>test1</li>
						<li>test2</li>
						<li>test3</li>
					</ul>
				</dialog>
			</div>
			<button
				className="testBtn"
				onClick={() => {
					setOpen(prevState => !prevState);
				}}>
				toggle
			</button>
		</>
	);
};

export default Map;
