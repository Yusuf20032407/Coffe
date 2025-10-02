import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const center = [41.2995, 69.2401];

const UZB_BOUNDS = [
    [37.0, 55.5],
    [45.0, 73.0],
];

function FitBoundsOnLoad({ bounds }) {
    const map = useMap();
    useEffect(() => {
        if (map) {
            map.fitBounds(bounds, { padding: [20, 20] });
        }
    }, [map, bounds]);
    return null;
}

export default function Location() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-4 md:p-6 border-b">
                    <h3 className="text-base montserrent md:text-lg lg:text-xl font-semibold text-gray-800">
                        Location — Uzbekistann
                    </h3>
                    <p className="text-xs montserrent md:text-sm text-gray-500">
                        Interactive map with markers
                    </p>
                </div>
                <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full">
                    <MapContainer
                        center={center}
                        zoom={5}
                        scrollWheelZoom={false}
                        className="w-full h-full"
                    >
                        <FitBoundsOnLoad bounds={UZB_BOUNDS} />

                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="© OpenStreetMap contributors"
                        />
                        <Marker position={center}>
                            <Popup>
                                Toshkent — Uzbekistan poytaxti. <br />
                                Lat: 41.2995, Lng: 69.2401
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
