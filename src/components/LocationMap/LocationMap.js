import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { mapStyles } from "./LocationMap.css";
import { ShowYourLocation } from "components";
const containerStyle = {
  width: "100%",
  height: "280px",
};

const center = {
  lat: 52.2247963,
  lng: 20.990558,
};

const LocationMap = () => {
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP,
  });
  const [markers, setMarkers] = useState([
    {
      lat: 52.2247963,
      lng: 20.990558,
    },
  ]);
  const [selected, setSelected] = useState(null);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
        onLoad={onMapLoad}
      >
        <ShowYourLocation
          markers={markers}
          setMarkers={setMarkers}
          panTo={panTo}
        />
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={
              marker.icon && {
                url: marker.icon,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }
            }
          />
        ))}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            {selected.lat === center.lat && selected.lng === center.lng ? (
              <div>
                <h2>Innox</h2>
                <p>al. Jerozolimskie 123</p>
                <p>00-001 Warsaw</p>
              </div>
            ) : (
              <div>
                <p>You are here</p>
              </div>
            )}
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default LocationMap;
