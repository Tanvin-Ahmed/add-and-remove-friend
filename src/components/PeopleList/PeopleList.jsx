import React, { useState } from "react";
import fakeData from "../../fakeData/fake-data.json";
import SelectedArea from "../SelectedArea/SelectedArea";
import ShowPeople from "../ShowPeople/ShowPeople";
import './PeopleList.css'
const PeopleList = () => {
  const [people] = useState(fakeData);
  const [friend, setFriend] = useState([]);
  const handleAddFriend = (add) => {
    const newFriend =[...friend, add];
    setFriend(newFriend);
  }
  const handleRemoveFriend = (removes) => {
    setFriend((previous) => {
      console.log(previous);
      const removedFriend = previous.filter(prev => prev.id !== removes.id);
      return removedFriend;
  })
  }
  return (
    <div className="d-flex">
    <div className="show-list-people">
      {people.map((man) => (
        <ShowPeople key={man.id} man={man} handleAddFriend={handleAddFriend}></ShowPeople>
      ))}
    </div>
    <div className="friend-list">
        <SelectedArea key={friend.id} friend={friend} handleRemoveFriend={handleRemoveFriend}></SelectedArea>
    </div>
    </div>
  );
};

export default PeopleList;
