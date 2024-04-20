import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Grid,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import imgBeneficios from "../img/imgBeneficios.png";

const beneficiosLista = [
  "Paquete de aplicaciones de Google y Microsoft",
  "Zoom PRO",
  "JetBrains",
  "LucidChart",
];

const openLink = () => {
  window.open(
    "https://docs.frba.utn.edu.ar/books/mu---beneficios-con-cuenta-institucional",
    "_blank",
    "noopener,noreferrer"
  );
};

const renderButton = () => (
  <Button
    onClick={openLink}
    size="large"
    sx={{
      borderRadius: "20px",
      backgroundColor: "#b71234",
      textTransform: "none",
      ":hover": {
        backgroundColor: "#800c24",
      },
    }}
    variant="contained"
  >
    Saber más
  </Button>
);

export default function Beneficios() {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <Grid container direction="row-reverse" sx={{ backgroundColor: "#ffeef1" }}>
      <Grid
        item
        xs={matches ? 6 : 12}
        sx={{ padding: matches ? "50px" : "25px" }}
      >
        <Grid container direction="column">
          <Grid item xs={12}>
            <br />
            <Typography
              textAlign={matches ? "left" : "center"}
              color="#b71234"
              fontWeight="bold"
              fontSize={matches ? "23px" : "20px"}
              marginBlock="10px"
              sx={{ marginBlock: "10px" }}
            >
              Tu cuenta institucional cuenta con diversos servicios e
              aplicaciones
            </Typography>
            <Typography variant="body1">
              <List sx={{ marginBlock: "20px" }}>
                {beneficiosLista.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      color: "#212121",
                      fontWeight: "bold",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                    }}
                  >
                    <ListItemIcon>
                      <DoneIcon sx={{ color: "#b71234" }} />
                    </ListItemIcon>
                    {item}
                  </ListItem>
                ))}
                <ListItem
                  sx={{
                    color: "#212121",
                    fontWeight: "bold",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                  }}
                >
                  <ListItemIcon>
                    <MoreHorizIcon
                      sx={{
                        color: "#b71234",
                        position: "relative",
                        top: "2px",
                      }}
                    />
                  </ListItemIcon>
                  Entre otros
                </ListItem>
              </List>
            </Typography>
            {!matches && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {renderButton()}
              </Box>
            )}
            {matches && renderButton()}
          </Grid>
        </Grid>
      </Grid>
      {matches && (
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            width={"85%"}
            height={"90%"}
            src={imgBeneficios}
            alt=""
            style={{
              objectFit: "contain",
              filter: "drop-shadow(0 0 0.75rem #9f9b9c)",
              borderRight: "1px solid lightgrey",
            }}
          />
        </Grid>
      )}
    </Grid>
  );
}
