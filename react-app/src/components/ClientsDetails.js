import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/client";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";



const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(5)
    }
})

const ClientsDetails = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllClients();
  }, []); //componentDidMount

  //toast msg.
  const { addToast } = useToasts();

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      props.deleteClient(id, () =>
        addToast("Deleted successfully", { appearance: "info" })
      );
  };
  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
     
        
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Photo</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.clientList.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.clientName}</TableCell>
                      <TableCell>{record.clientEmail}</TableCell>
                      <TableCell>{record.clientPhoto}</TableCell>
                      <TableCell>
                        <ButtonGroup variant="text">
                          <Button>
                            <EditIcon
                              color="primary"
                              onClick={() => {
                                setCurrentId(record.id);
                              }}
                            />
                          </Button>
                          <Button>
                            <DeleteIcon
                              color="secondary"
                              onClick={() => onDelete(record.id)}
                            />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => ({
    
    clientList: state.client.list
})

const mapActionToProps = {
    fetchAllClients: actions.fetchAll,
    deleteClient: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ClientsDetails));