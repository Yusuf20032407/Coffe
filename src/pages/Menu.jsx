import { Link } from "react-router-dom";
import React from "react";
import { Tabs } from "antd";

const Menu = () => {
  return (
    <div>
      <Tabs
        color="white"
        className="text-[#ffffffff]"
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
    </div>
  );
};

export default Menu;
