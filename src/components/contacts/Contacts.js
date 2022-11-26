import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch,DeleteUser } from "../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = ({editUser}) => {
  const { isLoading, contactList } = useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600, bgcolor: "#fffec5" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>USERNAME</TableCell>
              <TableCell align="left">PHONE NUMBER</TableCell>
              <TableCell align="left">GENDER</TableCell>
              <TableCell align="left">DELETE</TableCell>
              <TableCell align="left">EDIT</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              // Bilgiler gelmediği durumda Loading yazısı görünsün
              isLoading ? (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="center">
                    Loading
                  </TableCell>
                </TableRow>
              ) : contactList?.lenght === 0 ? (
                // Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="center">
                    No Result Found
                  </TableCell>
                </TableRow>
              ) : (
                // Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın
                contactList?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{item.username} </TableCell>
                    <TableCell align="left">{item.phoneNumber} </TableCell>
                    <TableCell align="left">{item.gender} </TableCell>
                    <TableCell align="center" onClick={()=>DeleteUser(item.id)}>
                      <DeleteIcon sx={{"&:hover": {color:"red", cursor:"pointer"}}} />
                    </TableCell>
                    <TableCell align="center" onClick={()=>editUser(
                      item.id,
                      item.username,
                      item.phoneNumber, 
                      item.gender
                    )}>
                      <EditIcon sx={{"&:hover": {color:"red", cursor:"pointer"}}} />
                    </TableCell>
                  </TableRow>
                ))
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
