import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import L from 'leaflet';
import point from './point';

const LeafletMap = () => {
  const mapRef = useRef(null);
  const geocoderRef = useRef(null);

  useEffect(() => {
    // Map initialization
    const map = L.map('map').setView([-0.303099, 36.080025], 11);
    mapRef.current = map; 

    // OSM layer
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    osm.addTo(map);

    // Google streets
    const googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    });
    googleStreets.addTo(map);
    const customIcon = L.icon({
        iconUrl: './marker.png', 
        iconSize: [40, 40], 
        iconAnchor: [-0.303099, 36.080025], 
       
      });

    // Marker
    const marker = L.marker([-0.303099, 36.080025], { icon: customIcon });
    marker.addTo(map).bindPopup('Quick Bite Central').openPopup();
    
    // GeoJSON layer
    L.geoJSON(point, {
      style: function (feature) {
        return { color: feature.properties.color };
      },
      pointToLayer: function (feature, latlng) {
        
        const customIcon = L.icon({
          iconUrl: feature.properties.iconUrl || './marker.png', 
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        });

        
        return L.marker(latlng, { icon: customIcon });
      },
      onEachFeature: function (feature, layer) {
        // add a pop up to each Geojson layer
        const popupContent = `<p>Quick Bite</p>`;
        layer.bindPopup(popupContent);
      },
    })
      .addTo(map);

    // Geocoder control
    const geocoder = L.Control.geocoder().addTo(map);
    geocoderRef.current = geocoder; 

    // Handle geocoding results
    geocoder.on('markgeocode', function (event) {
      const { center, name } = event.geocode;
      map.setView(center, map.getZoom());

      // Log the coordinates to the console
      console.log(`Searched Location: ${name}`);
      console.log(`Latitude: ${center.lat}`);
      console.log(`Longitude: ${center.lng}`);
    });

    
    return () => {
        // remove the map when the component is unmounted
      map.remove(); 
    };
  }, []);

  

  return (
    <div>
      
      <div id="map" style={{ width: '60vw', height: '50vh' }} />
    </div>
  );
};

export default LeafletMap;
