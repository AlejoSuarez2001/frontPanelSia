import BannerImg from "../img/siaDesign2.png";
import { Stack, Typography } from "@mui/material";

function Banner() {
  return (
    <Stack
      sx={{
        alignContent: "center",
        justifyContent: "center",
        backgroundImage: `url(${BannerImg})`,
        height: "300px",
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
        <Typography variant="h3" sx={{ fontWeight: "700" }}>
          ¡Bienvenido!
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "600px", padding: "16px", fontWeight: "600" }}
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
