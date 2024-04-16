import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DoneIcon from "@mui/icons-material/Done";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import imgBeneficios from "../img/imgBeneficios.png";

const beneficiosLista = [
  "Paquete de aplicaciones de Google y Microsoft",
  "Zoom PRO",
  "JetBrains",
  "LucidChart",
  "Entre otros..",
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
  const desktop = useMediaQuery("(min-width:800px)");

  return (
    <Grid container direction="row-reverse" sx={{ backgroundColor: "#ffeef1" }}>
      <Grid item xs={desktop ? 6 : 12} sx={{ padding: "50px" }}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <br />
            <Typography
              variant="h5"
              style={{
                textAlign: desktop ? "left" : "center",
                color: "#b71234",
                fontWeight: "bold",
              }}
            >
              Tu cuenta institucional cuenta con diversos beneficios e
              aplicaciones
            </Typography>
            <br />
            <Typography variant="body1">
              <List>
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
              </List>
            </Typography>
            <br />
            {!desktop ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {renderButton()}
              </Box>
            ) : (
              renderButton()
            )}
          </Grid>
        </Grid>
      </Grid>
      {desktop ? (
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
      ) : null}
    </Grid>
  );
}
