import React, { useEffect, useState } from 'react'
import axios from "axios";
import UserPhoto from "../User_icon.png"

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
      <div className="list-users">
        {users.map((user) => {
          return (
            <div className="profile-card">
                <div className="profile-img">
                <img src={UserPhoto} alt="" />
                </div>
              <div class="social">
                <h2> Hi! I'm {user.name}</h2>
                <p className="description"> You can call me {user.username}</p>
                <p className="description">And you can find below some details about me!</p>
                <div>
                  <p className="title">Email:</p>
                  <p className="description">{user.email}</p>
                </div>
                <div className="adress">
                  <p className="title">Address :</p>
                  <span>{user.address.street}</span>
                  <span>{user.address.suite}</span>
                  <span>{user.address.city}</span>
                </div>
                <div className="contact">
                  <p className="title">Phone Number :</p>
                  <span>{user.phone}</span>
                  <p className="title">Website :</p>
                  <span>{user.website}</span>
                  <p className="title"> company :</p>
                  <span>{user.company.name}</span>
                  <p className="description">{user.company.catchPhrase}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  export default UserList;