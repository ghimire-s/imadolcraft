import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const CraftCard = (props) => {
  const { avatarUrl, title, price, description, imageUrl } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton color="primary" aria-label="settings">
            <AddIcon />
          </IconButton>
        }
        title={title}
        // subheader={price}
      />
      <CardMedia style={{ height: "500px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">{price}</Button>
      </CardActions>
    </Card>
  );
};

export default CraftCard;
