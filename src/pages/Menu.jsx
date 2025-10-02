import { Link } from "react-router-dom";
import React from "react";
import { Tabs } from "antd";

const Menu = () => {
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
    </div>
  );
};

export default Menu;
