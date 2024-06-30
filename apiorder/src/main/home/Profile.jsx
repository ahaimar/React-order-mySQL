import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', age: '' });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/customer/${user.id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('There was an error fetching the profile data!', error);
      }
    };

    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  if (!user) {
    return <div className="container mt-5">Please log in to view your profile.</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <p><strong>First Name:</strong> {profile.firstName}</p>
      <p><strong>Last Name:</strong> {profile.lastName}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Age:</strong> {profile.age}</p>
    </div>
  );
};

export default Profile;
