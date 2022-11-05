import React from "react";
import { Button, PageHeader } from "antd";

const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Rent a Property"
        extra={[
          <Button key="4">Rent</Button>,
          <Button key="3">Buy</Button>,
          <Button key="2">Sell</Button>,
          <Button key="1" type="primary">
            Login/Sign up
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default Header;
