import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [YOUR_LONGITUDE, YOUR_LATITUDE], // Set the center of the map to Mantigola's location
      zoom: 10, // Adjust the zoom level as needed
    });

    // Add a marker at Mantigola's location
    new mapboxgl.Marker().setLngLat([YOUR_LONGITUDE, YOUR_LATITUDE]).addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className="h-96" />;
};

export default Map;
