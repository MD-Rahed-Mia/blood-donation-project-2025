import React, { useState } from "react";
import { Link } from "react-router";
import Colors from "../../constants/Color";

function DashboardItem({ item }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  return (
    <div style={{ marginBottom: "8px" }}>
      <li
        className="d-flex align-items-center justify-content-between gap-2"
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onClick={() => {
          setIsSubMenuVisible(!isSubMenuVisible);
          if (item.title === "Logout") {
            item.onClick();
          }
        }}
        style={{
          backgroundColor: mouseEnter ? Colors.primary.light : "#f8f9fa",
          cursor: "pointer",
          padding: "12px 16px",
          borderRadius: "8px",
          boxShadow: mouseEnter ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.2s ease-in-out",
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <div
            style={{
              color: Colors.primary.default,
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            {item.icon}
          </div>
          <Link
            to={item.path}
            style={{ textDecoration: "none", color: "#343a40" }}
          >
            <h6 className="m-0 f-w-600">{item.title}</h6>
          </Link>
        </div>
        {item.subCategory && (
          <span
            style={{
              fontSize: 16,
              color: Colors.primary.default,
              transform: isSubMenuVisible ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            ▶
          </span>
        )}
      </li>

      {item.subCategory && isSubMenuVisible && (
        <div style={{ paddingLeft: "40px", marginTop: "8px" }}>
          {item.subCategory.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.path}
              style={{
                display: "block",
                padding: "8px 12px",
                marginBottom: "6px",
                borderRadius: "6px",
                textDecoration: "none",
                backgroundColor: "#ffffff",
                color: "#495057",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f1f3f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardItem;
