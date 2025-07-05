import React, { useState } from "react";
import DashboardItem from "../atoms/DashboardItem";
import { MdDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { CiChat1 } from "react-icons/ci";

import { CiLogout } from "react-icons/ci";
import useAuth from "../../context/useAuth";

function Sidebar() {
  const { logout } = useAuth();

  const dashboardList = [
    {
      title: "Dashboards",
      icon: <MdDashboard />,
      path: "/Dashboard",
    },
    {
      title: "Ecommerce",
      icon: <GoProjectRoadmap />,
      path: "/e-commerce",
      subCategory: [
        {
          title: "Add products",
        },
        {
          title: "Product",
        },
        {
          title: "Cart",
        },
      ],
    },
    {
      title: "Chat",
      icon: <CiChat1 />,
      path: "/chat",
      subCategory: [
        {
          title: "Group chat",
        },
        {
          title: "Private chat",
        },
      ],
    },
    {
      title: "Logout",
      icon: <CiLogout />,
      onClick: () => {
        logout();
      },
    },
  ];

  // const DashboardItem = ({ item }) => {
  //   const [showSubCategory, setShowSubcategory] = useState(false);

  //   return (
  //     <div>
  //       <h1 onClick={() => setShowSubcategory(!showSubCategory)}>
  //         {item.title}
  //       </h1>

  //       {item.subCategory && item.subCategory.length > 0 && showSubCategory
  //         ? item.subCategory.map((subCate) => {
  //             return (
  //               <div>
  //                 <h4>{subCate.title}</h4>
  //               </div>
  //             );
  //           })
  //         : null}
  //     </div>
  //   );
  // };

  return (
    <div className="w-100">
      <h1
        style={{
          color: "red",
          fontWeight: "bold",
        }}
      >
        Blood
      </h1>

      {dashboardList &&
        dashboardList.map((item) => {
          return <DashboardItem item={item} />;
        })}
    </div>
  );
}

export default Sidebar;
