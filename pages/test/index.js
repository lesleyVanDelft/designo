import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';
const Test = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
	});

	if (!isLoaded) return <div>loading...</div>;
	return <Map />;
};

export default Test;

function Map() {
	const center = useMemo(() => ({ lat: 51.65458, lng: 4.86995 }), []);
	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
			<MarkerF position={center} />
		</GoogleMap>
	);
}
