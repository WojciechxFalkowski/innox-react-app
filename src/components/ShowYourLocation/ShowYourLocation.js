import React from "react";
import home from "images/contact/home.svg";
import { BackgroundButton } from "./ShowYourLocation.css";
const ShowYourLocation = ({ markers, setMarkers, panTo }) => {
  const handleShowYourLocation = (panTo) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        if (
          markers.findIndex(
            (marker) =>
              marker.lat === position.coords.latitude &&
              marker.lng === position.coords.longitude
          ) === -1
        ) {
          setMarkers([
            ...markers,
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              icon: home,
            },
          ]);
        }
      },
      () => null
    );
  };
  return (
    <BackgroundButton
      className="locate"
      onClick={() => handleShowYourLocation(panTo)}
    >
      my location
    </BackgroundButton>
  );
};

export default ShowYourLocation;
