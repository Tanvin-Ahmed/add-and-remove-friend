import React from "react";
import FriendList from "../FriendList/FriendList";
import "./SelectedArea.css";
const SelectedArea = (props) => {
  const handleRemoveFriend = props.handleRemoveFriend;
  const friend = props.friend;
  console.log(friend);
  let totalSalary = friend.reduce(
    (totalSalary, friend) => totalSalary + friend.salary,
    0
  );
  return (
    <section className="display container-fluid">
      <div className="header">
        <h2>Selected Friend Area</h2>
        <h4>Total Friend : {friend.length}</h4>
        <h6>Total Salary : {totalSalary}</h6>
        {friend.map((frd) => (
          <FriendList
            key={frd.id}
            friend={frd}
            handleRemoveFriend={handleRemoveFriend}
          ></FriendList>
        ))}
      </div>
    </section>
  );
};

export default SelectedArea;
