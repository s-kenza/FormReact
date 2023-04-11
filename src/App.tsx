import React, { useState } from "react";
import "./styles.css";
import { MyForm } from "./MyForm";
import { MyEntity } from "./Model";
import { Button } from "@material-ui/core";

const user1: MyEntity = {
  email: "user1@email1.com",
  firstName: "First Name 1",
  lastName: "Last 1",
  isDeveloper: true
};
const user2: MyEntity = {
  email: "user2@email2.com",
  firstName: "First Name 2",
  lastName: "Last 222222",
  isDeveloper: false
};

export default function App() {
  const [activeUser, setActiveUser] = useState(user1);
  return (
    <div className="App">
      <Button onClick={() => setActiveUser(user1)}> User 1 </Button>
      <Button onClick={() => setActiveUser(user2)}> User 2 </Button>
      <MyForm user={activeUser} />
    </div>
  );
}
