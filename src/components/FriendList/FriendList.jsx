import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import './FriendList.css';
const FriendList = (props) => {
    const friend = props.friend;
  const { id, name, gender, salary, img } = props.friend;
  return (
    <div className="body bg-info p-3 rounded mb-4">
      <div>
        <img className="p-2" src={img} alt="" />
      </div>
      <div>
            <h4>Name : {name}</h4>
            <p>
                <samll>Gender : {gender}</samll>
            </p>
            <h6>Salary : {salary}$</h6>
            <button type="submit" className="btn btn-secondary" onClick={() => props.handleRemoveFriend(friend)}><FontAwesomeIcon icon={faUserMinus} /> Remove</button>
      </div>
    </div>
  );
};

export default FriendList;
