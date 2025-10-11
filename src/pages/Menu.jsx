import React, { useState } from "react";
import { Tabs, Select, Button } from "antd";
import CoffeBox from "../assets/Caffelito.svg";
import { PlusOutlined } from "@ant-design/icons";
import CoffeIcon from "../assets/coffe sht.svg";
import FireIcon from "../assets/fire.svg";
import Mountain from "../assets/mountain.svg";
import Location from "../assets/Location.svg";
import Water from "../assets/water.svg";
import CoffeIconBlack from "../assets/coffe-icon-black.svg";
import FireIconBlack from "../assets/fireIconBlack.svg";
import MountainBlack from "../assets/mountainBlack.svg";
import LocationBlack from "../assets/locationBlack.svg";
import WaterBlack from "../assets/waterBlack.svg";

const Menu = () => {
  const handleChange = (value, label) => {
    console.log(value, label);
  };
  const [size, setSize] = useState("large");
  const [hovered, setHovered] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="ml-7 mr-7">
        <Tabs
          defaultActiveKey="1"
          className=""
          tabBarStyle={{ backgroundColor: "" }}
          items={[
            {
              label: <span style={{ color: "white" }}>Coffe</span>,
              key: "1",
              children: (
                <div>
                  <div className="grid-cols-2 flex container mx-auto">
                    <div className="w-[110vh] h-auto bg-[#1c743f]">
                      <div className="flex">
                        <div className="montserrent ml-[30px] mt-[25px] text-white">
                          <h1 className="font-semibold text-[40px]">Brazil</h1>
                          <h3 className="text-[50px]  font-light leading-15">
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
                        <img
                          className="pt-[50px] pl-[50px] pr-[30px]"
                          src={CoffeBox}
                          alt=""
                        />
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
                            defaultValue={{
                              value: "Latte",
                              label: "Latte (45гр)",
                            }}
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
                      <div className="flex items-end gap-[30px] mb-[90px]">
                        <div>
                          <Button
                            className="ml-[25px] hover:bg-black"
                            style={{
                              backgroundColor: hovered ? "white" : "black",
                              color: hovered ? "black" : "white",
                              transition: "all 0.3s ease",
                            }}
                            type="primary"
                            icon={<PlusOutlined />}
                            size={size}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                          >
                            В корзину
                          </Button>
                        </div>
                        <div className="flex items-center gap-[30px] text-white mr-[30px]">
                          <div>
                            <img className="pl-9" src={CoffeIcon} />
                            <p>Арабика/Рабуста</p>
                          </div>
                          <div>
                            <img className="pl-3" src={FireIcon} />
                            <p>Средняя</p>
                          </div>
                          <div>
                            <img className="pl-5" src={Mountain} />
                            <p>800-1000м</p>
                          </div>
                          <div>
                            <img className="pl-8" src={Location} />
                            <p>Бразилия/Индия</p>
                          </div>
                          <div>
                            <img className="pl-6" src={Water} />
                            <p>Натуральная</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[110vh] h-auto bg-white">
                      <div className="flex">
                        <div className="montserrent ml-[30px] mt-[25px] text-black">
                          <h1 className="font-semibold text-[40px]">Brazil</h1>
                          <h3 className="text-[50px]  font-light leading-15">
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
                        <img
                          className="pt-[50px] pl-[50px] pr-[30px]"
                          src={CoffeBox}
                          alt=""
                        />
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
                            defaultValue={{
                              value: "Latte",
                              label: "Latte (45гр)",
                            }}
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
                      <div className="flex items-center ml-[25px] gap-[10px] text-black mb-[30px] montserrent">
                        <p className="text-[30px] font-bold">110000</p>
                        <p className="text-[20px] font-semibold">UZS</p>
                      </div>
                      <div className="flex items-end gap-[30px] mb-[90px]">
                        <div>
                          <Button
                            className="ml-[25px] hover:bg-black"
                            style={{
                              backgroundColor: hovered ? "white" : "black",
                              color: hovered ? "black" : "white",
                              transition: "all 0.3s ease",
                            }}
                            type="primary"
                            icon={<PlusOutlined />}
                            size={size}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                          >
                            В корзину
                          </Button>
                        </div>
                        <div className="flex items-center gap-[30px] text-black mr-[30px]">
                          <div>
                            <img className="pl-9" src={CoffeIconBlack} />
                            <p>Арабика/Рабуста</p>
                          </div>
                          <div>
                            <img className="pl-3" src={FireIconBlack} />
                            <p>Средняя</p>
                          </div>
                          <div>
                            <img className="pl-5" src={MountainBlack} />
                            <p>800-1000м</p>
                          </div>
                          <div>
                            <img className="pl-8" src={LocationBlack} />
                            <p>Бразилия/Индия</p>
                          </div>
                          <div>
                            <img className="pl-6" src={WaterBlack} />
                            <p>Натуральная</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-cols-2 flex container mx-auto">
                    <div className="w-[110vh] h-auto bg-white">
                      <div className="flex">
                        <div className="montserrent ml-[30px] mt-[25px] text-black">
                          <h1 className="font-semibold text-[40px]">Brazil</h1>
                          <h3 className="text-[50px]  font-light leading-15">
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
                        <img
                          className="pt-[50px] pl-[50px] pr-[30px]"
                          src={CoffeBox}
                          alt=""
                        />
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
                            defaultValue={{
                              value: "Latte",
                              label: "Latte (45гр)",
                            }}
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
                      <div className="flex items-center ml-[25px] gap-[10px] text-black mb-[30px] montserrent">
                        <p className="text-[30px] font-bold">110000</p>
                        <p className="text-[20px] font-semibold">UZS</p>
                      </div>
                      <div className="flex items-end gap-[30px] mb-[90px]">
                        <div>
                          <Button
                            className="ml-[25px] hover:bg-black"
                            style={{
                              backgroundColor: hovered ? "white" : "black",
                              color: hovered ? "black" : "white",
                              transition: "all 0.3s ease",
                            }}
                            type="primary"
                            icon={<PlusOutlined />}
                            size={size}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                          >
                            В корзину
                          </Button>
                        </div>
                        <div className="flex items-center gap-[30px] text-black mr-[30px]">
                          <div>
                            <img className="pl-9" src={CoffeIconBlack} />
                            <p>Арабика/Рабуста</p>
                          </div>
                          <div>
                            <img className="pl-3" src={FireIconBlack} />
                            <p>Средняя</p>
                          </div>
                          <div>
                            <img className="pl-5" src={MountainBlack} />
                            <p>800-1000м</p>
                          </div>
                          <div>
                            <img className="pl-8" src={LocationBlack} />
                            <p>Бразилия/Индия</p>
                          </div>
                          <div>
                            <img className="pl-6" src={WaterBlack} />
                            <p>Натуральная</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[110vh] h-auto bg-[#1c743f]">
                      <div className="flex">
                        <div className="montserrent ml-[30px] mt-[25px] text-white">
                          <h1 className="font-semibold text-[40px]">Brazil</h1>
                          <h3 className="text-[50px]  font-light leading-15">
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
                        <img
                          className="pt-[50px] pl-[50px] pr-[30px]"
                          src={CoffeBox}
                          alt=""
                        />
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
                            defaultValue={{
                              value: "Latte",
                              label: "Latte (45гр)",
                            }}
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
                      <div className="flex items-end gap-[30px] mb-[90px]">
                        <div>
                          <Button
                            className="ml-[25px] hover:bg-black"
                            style={{
                              backgroundColor: hovered ? "white" : "black",
                              color: hovered ? "black" : "white",
                              transition: "all 0.3s ease",
                            }}
                            type="primary"
                            icon={<PlusOutlined />}
                            size={size}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                          >
                            В корзину
                          </Button>
                        </div>
                        <div className="flex items-center gap-[30px] text-white mr-[30px]">
                          <div>
                            <img className="pl-9" src={CoffeIcon} />
                            <p>Арабика/Рабуста</p>
                          </div>
                          <div>
                            <img className="pl-3" src={FireIcon} />
                            <p>Средняя</p>
                          </div>
                          <div>
                            <img className="pl-5" src={Mountain} />
                            <p>800-1000м</p>
                          </div>
                          <div>
                            <img className="pl-8" src={Location} />
                            <p>Бразилия/Индия</p>
                          </div>
                          <div>
                            <img className="pl-6" src={Water} />
                            <p>Натуральная</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              label: <span style={{ color: "white" }}>Protain</span>,
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
    </div>
  );
};

export default Menu;
