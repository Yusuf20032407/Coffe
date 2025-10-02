import { Link } from "react-router-dom";
import React from "react";
import { Tabs, Select } from "antd";
import CoffeBox from "../assets/Caffelito.svg";

const Menu = () => {
  const handleChange = (value, label) => {
    console.log(value, label);
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabBarStyle={{ backgroundColor: "" }}
        items={[
          {
            label: <span style={{ color: "white" }}>Coffe</span>,
            key: "1",
            children: "Tab 1",
          },
          {
            label: <span style={{ color: "white" }}>Tab 2</span>,
            key: "2",
            children: "Tab 2",
          },
          {
            label: <span className="text-white">Tab 3</span>,
            key: "3",
            children: "Tab 3",
          },
        ]}
      />
      <div className="grid-cols-2 flex container mx-auto">
        <div className="w-[100vh] h-auto bg-[#1c743f]">
          <div className="flex">
            <div className="montserrent ml-[25px] mt-[25px] text-white">
              <h1 className="font-semibold text-[40px]">Brazil</h1>
              <h3 className="text-[50px] font-light leading-15">Cerrado</h3>
              <p className="pt-[15px]">
                Классический кофе из Бразилии категории <br /> FineCup от
                знаменитого поставщика Мицуи Алиментос.
              </p>
              <div className="pt-[30px]">
                <h2 className="font-semibold">Вкус</h2>
                <p>Шоколад, карамель и орех</p>
              </div>
            </div>
            <img className="p-8" src={CoffeBox} alt="" />
          </div>
          <div className="flex gap-[40px] mb-[60px] ml-[25px]">
            <div>
              <Select
                labelInValue
                defaultValue={{ value: "Americano", label: "Americano (45гр)" }}
                style={{ width: 160 }}
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "Americano (45гр)",
                  },
                  {
                    value: "2",
                    label: "Americano (70гр)",
                  },
                  {
                    value: "3",
                    label: "Americano (100гр)",
                  },
                ]}
              />
            </div>
            <div>
              <Select
                labelInValue
                defaultValue={{ value: "Latte", label: "Latte (45гр)" }}
                style={{ width: 130 }}
                classNames="bg-red-500"
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "Latte (45гр)",
                  },
                  {
                    value: "2",
                    label: "Latte (70гр)",
                  },
                  {
                    value: "3",
                    label: "Latte (100гр)",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-[100vh] h-auto bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
};

export default Menu;
