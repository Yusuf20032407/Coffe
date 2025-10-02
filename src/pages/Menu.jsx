import { Link } from "react-router-dom";
import React from "react";
import { Tabs } from "antd";

const Menu = () => {
  return (
    <div>
      <Tabs
        color="white"
        className="text-[#ffffffff] container mx-auto"
        defaultActiveKey="1"
        items={[
          {
            label: "Coffe",
            key: "1",
            children: "Tab 1",
            className: "text-white",
          },
          {
            label: "Tab 2",
            key: "2",
            children: "Tab 2",
          },
          {
            label: "Tab 3",
            key: "3",
            children: "Tab 3",
          },
        ]}
      />
      <div className="grid- container mx-auto">
        <div className="w-[80px] h-[80px] bg-amber-300">1</div>
        <div className="w-[80px] h-[80px] bg-amber-700">2</div>
      </div>
    </div>
  );
};

export default Menu;
