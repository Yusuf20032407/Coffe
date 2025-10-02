import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Tabs, Select, Button } from "antd";
import CoffeBox from "../assets/Caffelito.svg";
import { PlusOutlined } from "@ant-design/icons";

const Menu = () => {
  const handleChange = (value, label) => {
    console.log(value, label);
  };
  const [size, setSize] = useState("large");

  return (
    <div className="container mx-auto">
      <Tabs
        defaultActiveKey="1"
        className=""
        tabBarStyle={{ backgroundColor: "" }}
        items={[
          {
            label: <span style={{ color: "white" }}>Coffe</span>,
            key: "1",
            children: (
              <div className="grid-cols-2 flex container mx-auto">
                <div className="w-[100vh] h-auto bg-[#1c743f]">
                  <div className="flex">
                    <div className="montserrent ml-[25px] mt-[25px] text-white">
                      <h1 className="font-semibold text-[40px]">Brazil</h1>
                      <h3 className="text-[50px] font-light leading-15">
                        Cerrado
                      </h3>
                      <p className="pt-[15px]">
                        Классический кофе из Бразилии категории <br /> FineCup
                        от знаменитого поставщика Мицуи Алиментос.
                      </p>
                      <div className="pt-[30px]">
                        <h2 className="font-semibold">Вкус</h2>
                        <p>Шоколад, карамель и орех</p>
                      </div>
                    </div>
                    <img className="p-8" src={CoffeBox} alt="" />
                  </div>
                  <div className="flex gap-[40px] mb-[40px] ml-[25px]">
                    <div>
                      <Select
                        labelInValue
                        defaultValue={{
                          value: "Americano",
                          label: "Americano (45гр)",
                        }}
                        style={{ width: 160, fontFamily: "montserrent" }}
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
                        style={{ width: 130, fontFamily: "montserrent" }}
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
                  <div className="flex items-center ml-[25px] gap-[10px] text-white mb-[30px] montserrent">
                    <p className="text-[30px] font-bold">110000</p>
                    <p className="text-[20px] font-semibold">UZS</p>
                  </div>
                  <div>
                    <div>
                      <Button
                        className="ml-[25px]"
                        type="primary"
                        icon={<PlusOutlined />}
                        size={size}
                      >
                        В корзину
                      </Button>
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
                <div className="w-[100vh] h-auto bg-white"></div>
              </div>
            ),
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
    </div>
  );
};

export default Menu;
