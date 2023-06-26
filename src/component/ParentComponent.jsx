import React, { useState } from "react";
import "./ParentComponent.css";
import ContactInfor from "./ContactInfor";
import ContactUs from "./ContactUs";

export default function ParentComponent() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [listArr, setListArr] = useState([]);

  function handleAdd() {
    const newItem = { ...contactInfo };
    setListArr([...listArr, newItem]);
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layThongTin">
      <div className="contactInfor">
        <ContactInfor contactInfo={contactInfo} />
      </div>
      <div className="contactUs">
        <ContactUs
          contactInfo={contactInfo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
}
