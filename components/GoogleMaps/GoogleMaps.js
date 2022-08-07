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
	// return <Map center={location} />;
	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
			<MarkerF position={center} />
		</GoogleMap>
	);
};

export default GoogleMaps;

// function Map({ center }) {
// 	// const center = useMemo(() => ({ lat: 51.65458, lng: 4.86995 }), []);
// 	const centerMarker = useMemo(
// 		() => ({ lat: center.latitude, lng: center.longitude }),
// 		[center.latitude, center.longitude]
// 	);
// 	return (
// 		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
// 			<MarkerF position={centerMarker} />
// 		</GoogleMap>
// 	);
// }
