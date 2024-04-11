import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button 
      style={{ 
        position: "absolute",
        top: "2%",
        right: "2%",
        border: "none",
        background: "none",
        cursor: "cursor",
      }}
      aria-label="Close"
      onClick={() => console.log("close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon"></img>
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;
