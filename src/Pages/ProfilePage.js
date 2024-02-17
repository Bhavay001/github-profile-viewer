import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfile from '../Components/UserProfile.js';
import RepositoryList from '../Components/RepositoryList.js';
import { getUserData} from '../Services/gihubService.js';

function ProfilePage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const globalSearchTerm = searchParams.get('search');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (globalSearchTerm) {
      getUserData(globalSearchTerm)
        .then((data) => setUserData(data))
        .catch((error) => {
          console.error('Error fetching user data:', error);
          navigate('/');
          throw error;
        });
    }
  }, [globalSearchTerm, navigate]);

  return (
    <div>
      {userData ? (
        <>
          <UserProfile userData={userData} />
          <RepositoryList username={globalSearchTerm} />
        </>
      ) : (
        <p>Search Result: Loading...</p>
      )}
    </div>
  );
}

export default ProfilePage;