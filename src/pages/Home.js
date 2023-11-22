import { React, useEffect, useState } from "react";
import axios from "axios";
import { Image } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { Audio } from "react-loader-spinner";

import Marks from "./Marks";
import Grade from "./Grade";

//debug

function Home() {
  // auth
  const [rollno, setRollno] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("rollno") === null) {
      console.log("no roll number");
      navigate("/login");
    } else {
      setRollno(localStorage.getItem("rollno"));
    }
  }, []);
  // auth ends

  const [data, setData] = useState({});
  const getData = () => {
    const url = "http://raxen-ideapad:8080/get-info/" + rollno;
    axios
      .get(url, {})
      .then(function (response) {
        // console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  useEffect(getData, [rollno]);
  const style = {
    height: "20rem",
    widht: "auto",
  };

  return (
    <div>
      {/* <Login /> */}
      <div className="w-full center">
        <Image
          className="w-full center"
          width={300}
          alt="USER"
          src={data.image}
          fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Grey_-_Squared_-_User_list_%28Deus_WikiProjects%29.png/1024px-Grey_-_Squared_-_User_list_%28Deus_WikiProjects%29.png"
        />
      </div>
      <Table isStriped>
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>
              {" "}
              <h2>ROLLNUMBER</h2>{" "}
            </TableCell>
            <TableCell>{rollno}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>Blood Group</h2>
            </TableCell>
            <TableCell>{data["Blood Group"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>College Email</h2>
            </TableCell>
            <TableCell>{data["CollegeEmail"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>Course Name</h2>
            </TableCell>
            <TableCell>{data["CourseName"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>DATE OF BIRTH</h2>
            </TableCell>
            <TableCell>{data["DateOfBirth"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>DEPARTMENT</h2>
            </TableCell>
            <TableCell>{data["Department"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>NAME</h2>
            </TableCell>
            <TableCell>{data["Name"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>PLACE OF BIRTH</h2>
            </TableCell>
            <TableCell>{data["Place of Birth"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>Current Semester</h2>
            </TableCell>
            <TableCell>{data["Semester"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h2>Gender</h2>
            </TableCell>
            <TableCell>{data["Sex"]}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <h2>CGPA</h2>
            </TableCell>
            <TableCell>{data["CGPA"]}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <h2>Total Attendance</h2>
            </TableCell>
            <TableCell>{data["P_Percentage"]}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <h2>Total Arrear</h2>
            </TableCell>
            <TableCell>{data["totalArrear"]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Marks />
      <Grade />
    </div>
  );
}
export default Home;
