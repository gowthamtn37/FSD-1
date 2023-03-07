import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PhoneList } from "./PhoneList";
import { Login } from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mobiles"
          element={
            <ProtectedRoute>
              <PhoneList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? (
    <div>
      <h1>Protected Route</h1>
      {children}
    </div>
  ) : (
    <div>
      <Navigate replace to="/" />
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Login />
    </div>
  );
}
