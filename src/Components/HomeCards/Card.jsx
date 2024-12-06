import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ProductCard(props) {
  return (
    <Card
      sx={{
        maxWidth: "333px !important",
        width: "100%",
        background: "#e0af4a",
        borderRadius: "0px",
        margin: "5px 2px !important",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
          sx={{ height: "350px" }}
        />
        <CardContent sx={{ padding: "0px", textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "16px", fontWeight: "700", margin: "15px 0px" }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
