import React, { useState, useEffect } from 'react';

const Suggestions = () => {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // Fetch profile
  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error('Error fetching profile:', error));
  }, []);

  // Fetch suggestions
  useEffect(() => {
    fetch('http://localhost:3000/suggestions')
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((error) => console.error('Error fetching suggestions:', error));
  }, []);

  return (
    <div className="suggestions w-75 m-4">
      {profile ? (
        <div className="d-flex align-items-center mb-3">
          <img
            className="dp rounded-circle me-2"
            src={profile.profile_pic}
            alt="profile"
            width="50"
            height="50"
          />
          <h5 className="mb-0">{profile.username}</h5>
          <small className="ms-auto text-primary">Switch</small>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      {/* Header for suggestions */}
      <div className="d-flex align-items-center mb-2">
        <p className="mb-0 text-muted">Suggested for you</p>
        <b className="ms-auto text-dark">See All</b>
      </div>

      {/* Suggested users list */}
      {suggestions.length > 0 ? (
        suggestions.map((user) => (
          <div
            key={user.id}
            className="d-flex align-items-center mb-2"
          >
            <img
              className="dp rounded-circle me-2"
              src={user.profile_pic}
              alt={user.username}
              width="40"
              height="40"
            />
            <div className="flex-grow-1">
              <p className="mb-0 fw-semibold">{user.username}</p>
            </div>
            <small className="text-primary ms-auto">Follow</small>
          </div>
        ))
      ) : (
        <p>Loading suggestions...</p>
      )}
    </div>
  );
};

export default Suggestions;
