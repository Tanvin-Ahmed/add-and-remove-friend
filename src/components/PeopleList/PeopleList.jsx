import React, { useState } from "react";
import fakeData from "../../fakeData/fake-data.json";
import SelectedArea from "../SelectedArea/SelectedArea";
import ShowPeople from "../ShowPeople/ShowPeople";
import './PeopleList.css'
const PeopleList = () => {
  const [people] = useState(fakeData);
  const [friend, setFriend] = useState([]);
  const handleAddFriend = (man) => {
    const newFriend =[...friend, man];
    setFriend(newFriend);
  }
  return (
    <section>
    <div className="show-list-people">
      {people.map((man) => (
        <ShowPeople key={man.id} man={man} handleAddFriend={handleAddFriend}></ShowPeople>
      ))}
    </div>
    <div className="friend-list">
        <SelectedArea key={friend.id} friend={friend}></SelectedArea>
    </div>
    </section>
  );
};

export default PeopleList;
