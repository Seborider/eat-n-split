import React from "react";
import { FriendsListProps } from "../types/types";
import { Friend } from "./Friend";

export function FriendsList({
  friends,
  onSelection,
  selectedFriend,
  onRemove,
}: FriendsListProps) {
  return (
    <ul>
      {friends.map((friend: any) => (
        <Friend
          onSelection={onSelection}
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onRemove={onRemove}
        ></Friend>
      ))}
    </ul>
  );
}
