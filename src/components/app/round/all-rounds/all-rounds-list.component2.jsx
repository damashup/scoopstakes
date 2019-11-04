import React, { useState } from 'react';
import clsx from 'clsx';
import Moment from 'react-moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

import { getInitials } from '../../../../helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const AllRoundsList = props => {
  const {allRounds, className, ...rest } = props;

  const classes = useStyles();

  const [selectedRounds, setSelectedRounds] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Round</TableCell>
                  <TableCell>></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allRounds.slice(0, rowsPerPage).map(round => {
                    const deadline =  <Moment fromNow>{round.deadline_time}</Moment> 
                    return (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={round.id}
                    selected={selectedRounds.indexOf(round.id) !== -1}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={round.round_img_url}
                        >
                        </Avatar>
                        <Typography variant="body1">Round {round.round_no} ({deadline})</Typography>
                      </div>
                    </TableCell>
                
                    <TableCell>
                      >
                    </TableCell>
                  </TableRow>
                )})}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={allRounds.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};


export default AllRoundsList;
