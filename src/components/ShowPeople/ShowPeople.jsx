import React from "react";
import "./ShowPeople.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
const ShowPeople = (props) => {
  const { name, gender, salary, img } = props.man;
  return (
    <div className="d-flex">
      <div className="people-list bg-primary text-light rounded">
        <img src={img} alt="" />
        <div className="details">
          <h3>{name}</h3>
          <p>
            <small>Gender : {gender}</small>
          </p>
          <h6>Salary : {salary}$</h6>
          <button className="btn btn-light" type="submit" onClick={() => props.handleAddFriend(props.man)}>
            <FontAwesomeIcon icon={faUserPlus} /> Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPeople;
