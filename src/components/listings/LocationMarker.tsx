import React from "react";

type LocationMarkerProps = {
  lat: number;
  lng: number;
  onClick: () => void;
};

function LocationMarker({ lat, lng, onClick }: LocationMarkerProps) {
  return (
    <div onClick={onClick}>
      <i
        className="fa fa-map-marker"
        style={{ color: "red", fontSize: "1.5rem" }}
      />
    </div>
  );
}

export default LocationMarker;
