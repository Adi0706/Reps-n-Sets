

import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";
import NavBar from "../Components/NavBar";
import LoginNavBar from "../Components/LoginNavBar";
import Footer from "../Components/Footer";
import PageAnimation from "../Components/PageAnimation";

const containerStyle = {
  width: "100%",
  height: "500px",
};


const center = {
  lat: 0, // Default latitude value
  lng: 0, // Default longitude value
};
const LIBRARIES = ["places"];
const API_KEY = "AIzaSyAUvxVaNyuSsojZC7XhRMb8LKWlBaTbXj0"; // Replace with your actual API key

// Custom hook to load Google Maps API
function useGoogleMapsApi() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: LIBRARIES,
  });


  const [userLocation, setUserLocation] = useState(null);
  const [gymsNearby, setGymsNearby] = useState([]);
  const [selectedGym, setSelectedGym] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const mapRef = useRef(null);
  const isLoggedIn = true; // Replace with your authentication logic

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setGymsNearby([]); // Clear the previous gyms data
        },
        (error) => console.error("Error getting user location:", error)
      );
    }
  }, []);

  const onLoad = useCallback((map) => {
    mapRef.current = map; // Store the map reference in the ref
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null; // Clear the map reference when unmounting
  }, []);

  const onLoadSearchBox = useCallback((ref) => {
    setSearchBox(ref);
  }, []);

  const onPlacesChanged = useCallback(() => {
    const places = searchBox.getPlaces();
    if (places.length > 0) {
      const { lat, lng } = places[0].geometry.location;
      setUserLocation({ lat: lat(), lng: lng() });
    }
  }, [searchBox]);

  useEffect(() => {
    if (userLocation && mapRef.current && window.google) {
      const placesService = new window.google.maps.places.PlacesService(mapRef.current);
      const request = {
        location: userLocation,
        radius: 5000,
        type: "gym",
      };

      placesService.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setGymsNearby(results);
        }
      });
    }
  }, [userLocation]);

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <PageAnimation>
      <div>
      {isLoggedIn ? <LoginNavBar /> : <NavBar />}
        <h1 style={{ marginLeft: "20px" }}>FIND GYMS NEAR YOU</h1>
        <StandaloneSearchBox onLoad={onLoadSearchBox} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Search Gyms"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `40px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              top: "10px",
              left: "50%",
              marginLeft: "-400px",
              marginTop: "55px",
            }}
          />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation || center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {userLocation && <Marker position={userLocation} title="Your Location" />}

          {gymsNearby.map((gym) => (
            <Marker
              key={gym.id}
              position={{ lat: gym.geometry.location.lat(), lng: gym.geometry.location.lng() }}
              onClick={() => setSelectedGym(gym)}
            />
          ))}

          {selectedGym && (
            <InfoWindow
              position={{
                lat: selectedGym.geometry.location.lat(),
                lng: selectedGym.geometry.location.lng(),
              }}
              onCloseClick={() => setSelectedGym(null)}
            >
              <div>
                <h3>{selectedGym.name}</h3>
                <p>{selectedGym.vicinity}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
        <Footer />
      </div>
    </PageAnimation>
  );
}

export default useGoogleMapsApi;
