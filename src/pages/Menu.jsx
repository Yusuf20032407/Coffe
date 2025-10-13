import React, { useState } from "react";
import { Tabs, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CoffeBox from "../assets/Caffelito.svg";
import CoffeIcon from "../assets/coffe sht.svg";
import Water from "../assets/water.svg";
import CoffeIconBlack from "../assets/coffe-icon-black.svg";
import FireIconBlack from "../assets/fireIconBlack.svg";
import MountainBlack from "../assets/mountainBlack.svg";
import LocationBlack from "../assets/locationBlack.svg";
import WaterBlack from "../assets/waterBlack.svg";

const Menu = () => {
  const [hovered, setHovered] = useState(false);

  const handleChange = (value, label) => {
    console.log(value, label);
  };

  const renderCard = (bgColor, textColor, iconsColor) => (
    <div
      className={`rounded-2xl shadow-xl overflow-hidden ${bgColor} transition-all duration-300`}
    >
      <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 gap-6">
        <div className={`font-[montserrat] ${textColor} flex-1`}>
          <h1 className="font-semibold text-3xl md:text-4xl">Brazil</h1>
          <h3 className="text-4xl md:text-5xl font-light leading-tight">Cerrado</h3>
          <p className="pt-3 text-base md:text-lg opacity-90">
            Классический кофе из Бразилии категории FineCup от знаменитого
            поставщика Мицуи Алиментос.
          </p>

          <div className="pt-6">
            <h2 className="font-semibold text-xl">Вкус</h2>
            <p>Шоколад, карамель и орех</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-6">
            <Select
              labelInValue
              defaultValue={{
                value: "Americano",
                label: "Americano (45гр)",
              }}
              style={{ width: 180 }}
              onChange={handleChange}
              options={[
                { value: "1", label: "Americano (45гр)" },
                { value: "2", label: "Americano (70гр)" },
                { value: "3", label: "Americano (100гр)" },
              ]}
            />
            <Select
              labelInValue
              defaultValue={{
                value: "Latte",
                label: "Latte (45гр)",
              }}
              style={{ width: 150 }}
              onChange={handleChange}
              options={[
                { value: "1", label: "Latte (45гр)" },
                { value: "2", label: "Latte (70гр)" },
                { value: "3", label: "Latte (100гр)" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 gap-4">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold">110,000</p>
              <p className="text-lg font-medium">UZS</p>
            </div>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                backgroundColor: hovered ? "white" : "black",
                color: hovered ? "black" : "white",
                transition: "all 0.3s ease",
              }}
            >
              В корзину
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <img
            className="w-48 md:w-64 lg:w-72 object-contain"
            src={CoffeBox}
            alt="Coffee Box"
          />
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-center md:justify-around text-center py-6 px-4 border-t border-opacity-20 ${textColor}`}
      >
        <div className="flex flex-col items-center gap-1">
          <img src={iconsColor === "white" ? CoffeIcon : CoffeIconBlack} className="w-7" />
          <p>Арабика/Рабуста</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconsColor === "white" ? Water : FireIconBlack} className="w-7" />
          <p>Средняя</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconsColor === "white" ? Water : MountainBlack} className="w-7" />
          <p>800–1000м</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconsColor === "white" ? Water : LocationBlack} className="w-7" />
          <p>Бразилия/Индия</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconsColor === "white" ? Water : WaterBlack} className="w-7" />
          <p>Натуральная</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: <span className="text-white text-lg">Coffee</span>,
            key: "1",
            children: (
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {renderCard("bg-[#1c743f]", "text-white", "white")}
                  {renderCard("bg-white", "text-black", "black")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {renderCard("bg-white", "text-black", "black")}
                  {renderCard("bg-[#1c743f]", "text-white", "white")}
                </div>
              </div>
            ),
          },
          {
            label: <span className="text-white text-lg">Protein</span>,
            key: "2",
            children: (
              <div className="text-center py-20 text-white text-2xl">
                Soon...
              </div>
            ),
          },
          {
            label: <span className="text-white text-lg">Tea</span>,
            key: "3",
            children: (
              <div className="text-center py-20 text-white text-2xl">
                Soon...
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Menu;
