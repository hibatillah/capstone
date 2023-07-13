/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { CardInfo } from "../../components/Card";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Vector3 from "../../assets/img/Vector3.png";
import Vector4 from "../../assets/img/Vector4.png";
const Dashboard = () => {
  const data = [];
  return (
    <div className="px-7">
      <iframe
        width="100%"
        height="3750"
        src="https://lookerstudio.google.com/embed/reporting/d7f93114-8120-49d8-824c-0b9f731d8b84/page/b2mWD"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Dashboard;
