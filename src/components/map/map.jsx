import {cityType} from '../city/city.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {offerItemType} from '../offer-item/offer-item.prop';
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';

const Map = ({city, offers}) => {
  const center = [city.location.latitude, city.location.longitude];
  const zoom = city.location.zoom;
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(center, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      const coordinates = [offer.location.latitude, offer.location.longitude];

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker(coordinates, {
        icon
      })
        .addTo(mapRef.current)
        .bindPopup(offer.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  return <div id="map" ref={mapRef} style={{height: `100%`}}></div>;
};

Map.propTypes = {
  city: cityType,
  offers: PropTypes.arrayOf(offerItemType)
};

export default Map;
