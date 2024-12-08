import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function MenuCard(props) {
  return (
    <Card
      sx={{
        maxWidth: "333px !important",
        width: "100%",
        background: "#283341",
        borderRadius: "0px",
        margin: "5px 2px !important",
        height: "100%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.img}
          alt="green iguana"
          sx={{ height: "165px" }}
        />
        <CardContent sx={{ padding: "20px", textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "13px",
              fontWeight: "700",
              margin: "10px 0px",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: "1.7em",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              color: "#e0af4a",
              lineHeight: "1.7em",
            }}
          >
            {props.subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
