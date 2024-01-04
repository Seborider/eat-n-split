import React, { useState } from "react";
import "./App.css";
import { FriendsList } from "./components/FriendsList";
import { Button } from "./components/Button";
import { FormAddFriend } from "./components/FormAddFriend";
import { FormSplitBill } from "./components/HandleSubmit";
import { Friend } from "./types/types";

const initialFriends = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState<Friend[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [removeFriend, setRemoveFriend] = useState<Friend | null>(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend: Friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend: Friend) {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend,
    );
    setShowAddFriend(false);
  }

  function handleRemove(friendId: string) {
    setFriends((currentFriends) =>
      currentFriends.filter((friend) => friend.id !== friendId),
    );
  }

  function handleSplitBill(value: any) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
          onRemove={handleRemove}
        ></FriendsList>
        {showAddFriend && (
          <FormAddFriend onAddFriend={handleAddFriend}></FormAddFriend>
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        ></FormSplitBill>
      )}
    </div>
  );
}

export default App;
