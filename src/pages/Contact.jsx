import React, { useState } from "react";
import { Input, Button, message, Card, Switch } from "antd";
import { motion } from "framer-motion";
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
    InstagramOutlined,
    FacebookOutlined,
    SendOutlined,
    BulbOutlined,
    MoonOutlined,
} from "@ant-design/icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const coffeeIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/924/924514.png",
    iconSize: [40, 40],
});

export default function ContactPage() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            message.error("Iltimos, barcha maydonlarni to‘ldiring ☕");
            return;
        }
        message.success("Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz 💬");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div
            className={`min-h-screen pb-20 transition-all duration-500 ${darkMode
                ? "bg-[#000000] text-gray-200"
                : "bg-gradient-to-br from-[#163b25] to-[#163b25]"
                }`}
        >
            {/* <div className="flex justify-end items-center gap-2 pr-8 pt-6">
                <span className="text-base font-medium">
                    {darkMode ? "Tungi rejim" : "Yorug‘ rejim"}
                </span>
                <Switch
                    checkedChildren={<MoonOutlined />}
                    unCheckedChildren={<BulbOutlined />}
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
            </div> */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-center py-20 ${darkMode
                    ? "bg-gradient-to-r from-[#000000] to-[#000000] text-white"
                    : "bg-gradient-to-r from-[#163b25] to-[#163b25] text-white"
                    }`}
            >
                <h1 className="text-5xl font-bold mb-4 montserrent">Biz bilan bog‘laning ☕</h1>
                <p className="text-xl montserrent opacity-90">
                    Savolingiz, fikringiz yoki buyurtmangiz bo‘lsa — yozing!
                </p>
            </motion.div>
            <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`rounded-2xl p-8 border shadow-xl ${darkMode
                        ? "bg-[#000000] border-[#3a3a3a]"
                        : "bg-white border-gray-100"
                        }`}
                >
                    <h2
                        className={`text-3xl font-semibold montserrent mb-6 ${darkMode ? "text-[#fffff]" : "text-[#4b3d2a]"
                            }`}
                    >
                        Xabar yuborish
                    </h2>
                    <Input
                        name="name"
                        placeholder="Ismingiz"
                        className="h-[55px] mb-4 text-lg"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Input
                        name="email"
                        placeholder="Email manzilingiz"
                        className="h-[55px] mb-4 text-lg"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input.TextArea
                        name="message"
                        placeholder="Xabaringizni yozing..."
                        rows={6}
                        className="text-lg mb-4"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button
                        type="primary"
                        className={`h-[55px] w-full text-lg montserrent ${darkMode
                            ? "bg-[#d6a66c] hover:bg-[#c2925a] text-black"
                            : "bg-[#8b5e3c] hover:bg-[#a07349] text-white"
                            }`}
                        onClick={handleSubmit}
                    >
                        Yuborish
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border ${darkMode ? "border-[#3a3a3a]" : "border-gray-100"
                        }`}
                >
                    <MapContainer
                        center={[41.3111, 69.2797]}
                        zoom={13}
                        scrollWheelZoom={false}
                        className="h-full w-full"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            className="rounded-2xl"
                        />
                        <Marker position={[41.3111, 69.2797]} icon={coffeeIcon}>
                            <Popup>Biz shu yerdamiz ☕ Coffee Roasters</Popup>
                        </Marker>
                    </MapContainer>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl montserrent mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            >
                {[
                    {
                        icon: <EnvironmentOutlined className="text-4xl text-[#d6a66c]" />,
                        title: "Manzil",
                        desc: "Toshkent, Amir Temur ko'chasi 15",
                    },
                    {
                        icon: <PhoneOutlined className="text-4xl text-[#d6a66c]" />,
                        title: "Telefon",
                        desc: "+998 90 123 45 67",
                    },
                    {
                        icon: <MailOutlined className="text-4xl text-[#d6a66c]" />,
                        title: "Email",
                        desc: "info@coffeeroasters.uz",
                    },
                    {
                        icon: <ClockCircleOutlined className="text-4xl text-[#d6a66c]" />,
                        title: "Ish vaqti",
                        desc: "08:00 – 23:00",
                    },
                ].map((item, idx) => (
                    <Card
                        key={idx}
                        className={`text-center rounded-2xl hover:shadow-lg transition-all duration-300 ${darkMode
                            ? "bg-[#2a2a2a] border-[#3a3a3a] text-gray-200"
                            : "bg-white border-gray-100 text-gray-800"
                            }`}
                    >
                        <div className="flex flex-col items-center gap-2">
                            {item.icon}
                            <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    </Card>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex gap-6 justify-center mt-12"
            >
                <a href="#">
                    <InstagramOutlined className="text-4xl text-[#d6a66c] hover:text-pink-500 transition-all" />
                </a>
                <a href="#">
                    <FacebookOutlined className="text-4xl text-[#d6a66c] hover:text-blue-600 transition-all" />
                </a>
                <a href="#">
                    <SendOutlined className="text-4xl text-[#d6a66c] hover:text-sky-500 transition-all" />
                </a>
            </motion.div>
        </div>
    );
}
