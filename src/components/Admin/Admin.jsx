import React from "react";
import "./Admin.css";
// import db from "../../pages/CulturalDetail/Form/firebase";
import Background from "../../UI/Background";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Opacity, OpenInNew } from "@mui/icons-material";

const Admin = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <section className="gallerySection">
      <Background className="galleryBg"></Background>
      <div className="row">
        <TableContainer sx={{ maxWidth: 1500 }} component={Paper}>
          <Table
            sx={{ minWidth: 650, maxWidth: 1500 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Sr. No.
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Reg. ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Receipt ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Mobile Number
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Department
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Year
                </TableCell>
                <TableCell
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  align="center"
                >
                  Photo
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    sx={{ fontSize: "16px" }}
                    component="th"
                    scope="row"
                  >
                    1
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }} align="center">
                    TechVi12312
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }} align="center">
                    123123
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }} align="center">
                    Mrudul Patel
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }} align="center">
                    8698793479
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }} align="center">
                    Computer
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }} align="center">
                    TE
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "16px", cursor: "pointer" }}
                    align="center"
                  >
                    <OpenInNew />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Admin;
