// App.jsx
import React from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

const App = () => {
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
   
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
};

export default App;
