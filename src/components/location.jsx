import React, { useState, useRef, useEffect } from "react";
import location from '../assets/location.svg';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import { Input, Card, Button } from "antd";
import {
    EnvironmentOutlined,
    SearchOutlined,
    CompassOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const { Search } = Input;

const createIcon = () =>
    L.divIcon({
        className: "marker-icon",
        html: `
      <div class="relative">
        <div class="w-10 h-10 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full animate-pulse shadow-lg flex items-center justify-center text-white font-bold text-lg">📍</div>
        <div class="absolute top-[38px] left-[15px] w-3 h-3 bg-pink-400 rounded-full blur-sm opacity-70 animate-bounce"></div>
      </div>
    `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

const FlyTo = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        if (position) map.flyTo(position, 14, { duration: 1.5 });
    }, [position, map]);
    return null;
};

export default function Location() {
    const [center, setCenter] = useState({ lat: 41.311081, lng: 69.240562 });
    const [marker, setMarker] = useState(center);
    const [address, setAddress] = useState("Toshkent, O‘zbekiston");
    const [loading, setLoading] = useState(false);
    const mapRef = useRef();

    const handleLocate = () => {
        if (!navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            setCenter(coords);
            setMarker(coords);
        });
    };

    const handleSearch = async (value) => {
        if (!value) return;
        setLoading(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
            );
            const data = await res.json();
            if (data[0]) {
                const loc = { lat: +data[0].lat, lng: +data[0].lon };
                setCenter(loc);
                setMarker(loc);
                setAddress(data[0].display_name);
            } else {
                alert("Manzil topilmadi 😔");
            }
        } finally {
            setLoading(false);
        }
    };

    const openDirections = () => {
        window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`
        );
    };

    return (
        <div className="relative pt-24 pb-24 min-h-screen bg-gradient-to-br  flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute w-[600px] h-[600px] bg-pink-400 blur-[200px] rounded-full top-[-100px] left-[-100px]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute w-[600px] h-[600px] bg-orange-400 blur-[200px] rounded-full bottom-[-100px] right-[-100px]"
                ></motion.div>
            </div>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="z-10 w-[95%] md:w-[85%] max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6"
            >
                <Card
                    bordered={false}
                    className="bg-transparent text-white backdrop-blur-md col-span-1"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400"
                    >
                        Bizning joylashuv
                    </motion.h2>

                    <Search
                        placeholder="Masalan: Milliy taomlar kafesi..."
                        enterButton={<SearchOutlined />}
                        size="large"
                        loading={loading}
                        onSearch={handleSearch}
                        className="mb-4"
                    />

                    <Button
                        icon={<CompassOutlined />}
                        onClick={handleLocate}
                        type="primary"
                        ghost
                        className="mb-4 w-full"
                    >
                        Mening joylashuvimni top
                    </Button>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/10 p-4 rounded-2xl mt-4"
                    >
                        <p className="text-sm text-gray-300">Tanlangan manzil:</p>
                        <p className="font-semibold text-white">{address}</p>
                        <Button
                            className="mt-3 w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold hover:opacity-90 transition"
                            onClick={openDirections}
                        >
                            Google Map’da ochish
                        </Button>
                    </motion.div>
                </Card>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="col-span-2 rounded-3xl overflow-hidden shadow-xl"
                >
                    <MapContainer
                        center={[center.lat, center.lng]}
                        zoom={13}
                        scrollWheelZoom={true}
                        className="h-[450px] md:h-[600px]"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />
                        <FlyTo position={[center.lat, center.lng]} />
                        <Marker position={[marker.lat, marker.lng]} icon={createIcon()}>
                            <Popup>
                                <strong>{address.split(",")[0]}</strong>
                                <br />
                                Koordinata: {marker.lat.toFixed(4)}, {marker.lng.toFixed(4)}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 montserrent text-white font-semibold text-2xl md:text-3xl tracking-wide"
            >
                ☕ Coffee Joylashuvi
            </motion.div>
        </div>
    );
}
