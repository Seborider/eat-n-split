import { Button } from "./Button";
import React from "react";
import { FriendProps } from "../types/types";

export function Friend({
  friend,
  onSelection,
  selectedFriend,
  onRemove,
}: FriendProps) {
  const isSelected = selectedFriend ? selectedFriend.id === friend.id : false;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€.
        </p>
      )}
      {friend.balance === 0 && (
        <p>You owe and your friend {friend.name} are even.</p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
      <Button onClick={() => onRemove(friend.id)}>❌</Button>
    </li>
  );
}
