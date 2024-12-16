"use client";
import React from "react";
import Navbar from "./navbar";
import Intro from "./intro";
import YouTubeSection from "./youtubelink";
import ProjectTiles from "./project";
import Footer from "./footer";
import Contact from "./contact";
// import Course from "./course";

import { useEffect, useState } from "react";
import { fetchUsers, addUser } from "../utils/api";

interface User {
  _id: string;
  name: string;
  email: string;
}
export default function Homepage() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async () => {
    try {
      await addUser({ name, email });
      loadUsers(); // Refresh users list
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <Navbar />
      <Intro />
      {/* <Course /> */}
      <YouTubeSection />
      <ProjectTiles />
      <Contact />
      <Footer />
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </>
  );
}
