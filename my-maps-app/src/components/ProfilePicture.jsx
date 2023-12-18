// src/components/ProfilePicture.jsx
import React from "react";
import "../App.css";
const ProfilePicture = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Profile" className="profile-picture" />;
};

export default ProfilePicture;
