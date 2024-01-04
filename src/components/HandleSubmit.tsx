import React, { useState } from "react";
import { Button } from "./Button";
import { FormSplitBillProps } from "../types/types";

export function FormSplitBill({
  selectedFriend,
  onSplitBill,
}: FormSplitBillProps) {
  const [bill, setBill] = useState<number | "">("");
  const [paidByUser, setPaidByUser] = useState<number | "">("");
  const paidByFriend = bill && paidByUser ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (bill && paidByUser) {
      onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }
  }

  if (!selectedFriend) {
    return <p>Please select a friend to split the bill with.</p>;
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value) || "")}
      />

      <label>🏌️🏌 Your expense️</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(event) =>
          setPaidByUser(
            Number(event.target.value) > bill
              ? paidByUser
              : Number(event.target.value) || "",
          )
        }
      />

      <label>👬 {selectedFriend.name} expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🏄 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
