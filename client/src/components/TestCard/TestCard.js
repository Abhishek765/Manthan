import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ClassIcon from "@material-ui/icons/Class";
import { Avatar, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  root: {
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    margin: 20,
  },

  content: {
    display: "inline-flex",
    width: "100%",
  },

  details: {
    flexGrow: " 1",
    marginInlineStart: "1.5%",
  },

  avatar: {
    background: "#4285f4",
  },

  delete: {
    float: "right",
    margin: 20,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { name, dueDate, _id, marks, duration } = props.Test;

  const { id } = props.Test;

  const { admin } = props;
  const date = new Date(dueDate);
  const DurationHours = new Date(duration).getHours();
  const DurationMins = new Date(duration).getMinutes();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Avatar className={classes.avatar}>
          <ClassIcon />
        </Avatar>
        <div className={classes.details}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Due: {date.toLocaleDateString()}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Max Marks: {marks}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Duration: {DurationHours}hrs {DurationMins}mins
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            href={`/${_id}/start`}
          >
            Start
          </Button>
        </div>
      </CardContent>

      {admin === "true" && (
        <DeleteIcon
          fontSize="large"
          className={classes.delete}
          onClick={() => {
            props.onDelete(id);
          }}
          style={{ color: "#794242" }}
        />
      )}
    </Card>
  );
}
