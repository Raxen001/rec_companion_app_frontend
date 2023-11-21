import React from "react";
import { useState, useEffect } from "react";

import { Button, Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [rollno, setRollno] = useState("");
  // Initial load
  useEffect(() => {
    if (localStorage.getItem("rollno") === "null") {
      console.log("no roll number");
    } else {
      setRollno(localStorage.getItem("rollno"));
    }
  }, []);
  function handlesubmit() {
    localStorage.setItem("rollno", rollno);
    // window.location.reload(false);
    navigate("/home");
  }

  return (
    <div className="w-full flex center">
      <Input
        className="center w-full flex"
        type="text"
        label="RollNumber"
        className="max-w-xs"
        placeholder="211001084"
        onChange={(e) => setRollno(e.target.value)}
      />
      <Button onClick={handlesubmit} className="center flex">
        Submit
      </Button>
    </div>
  );
}
export default Login;
