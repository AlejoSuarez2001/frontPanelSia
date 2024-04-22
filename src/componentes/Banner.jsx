import BannerImg from "../img/siaDesign2.jpg";
import { Stack, Typography, useMediaQuery } from "@mui/material";

function Banner() {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <Stack
      sx={{
        alignContent: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${BannerImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "350px",
        color: "#d5d5d5",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
      }}
    >
      <Stack
        sx={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "700",
            fontSize: matches ? "35px" : "30px",
          }}
        >
          ¡Bienvenido!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "600px",
            padding: "20px",
            fontWeight: matches ? "bold" : "200",
            fontSize: matches ? "19px" : "16px",
          }}
        >
          Se encuentra en el portal de acceso a los servicios que provee la
          Secretaría de Tecnologías de la Información y la Comunicación de la
          UTN FRBA
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Banner;
