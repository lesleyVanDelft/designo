import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';

const GoogleMaps = ({ location }) => {
	const [center, setCenter] = useState({ location });

	useEffect(() => {
		setCenter(location);
	}, [location]);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
	});

	if (!isLoaded) return <div>loading...</div>;
	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
			<MarkerF position={center} />
		</GoogleMap>
	);
};

export default GoogleMaps;
