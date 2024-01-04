import React from "react";

export interface Friend {
  id: string;
  name: string;
  image: string;
  balance: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface FriendsListProps {
  friends: Friend[];
  onSelection: (friend: Friend) => void;
  selectedFriend: Friend | null;
  onRemove: (friendId: string) => void;
}

export interface FriendProps {
  friend: Friend;
  onSelection: (friend: Friend) => void;
  onRemove: (friendId: string) => void;
  selectedFriend: Friend | null;
}

export interface FormAddFriendProps {
  onAddFriend: (friend: Friend) => void;
}

export interface FormSplitBillProps {
  selectedFriend: Friend;
  onSplitBill: (value: any) => void;
}
