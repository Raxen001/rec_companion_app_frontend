import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  PaginationItem,
  PaginationCursor,
  Button,
  Image,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Marks() {
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
    const url = "http://localhost:8080/internal-marks/" + rollno;
    axios
      .get(url, {})
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  useEffect(getData, [rollno]);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
    },
  ];
  const columns = [
    {
      key: "subject",
      label: "Subject Name",
    },
    {
      key: "marks",
      label: "Total Marks Scored",
    },
    {
      key: "marks",
      label: "Total Marks Scored",
    },
  ];

  const no_sems = Object.keys(data).length;

  return (
    <div>
      {/* <Pagination showControls total={no_sems} initialPage={no_sems} /> */}
      {/* <Pagination showControls total={3} initialPage={2} /> */}

      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
export default Marks;
