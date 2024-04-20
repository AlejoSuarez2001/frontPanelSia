import { Typography, Stack } from "@mui/material";

function Header() {
  return (
    <Stack
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: "100",
        color: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
        height: "64px",
        backgroundColor: "#b71234",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
      }}
    >
      <Typography sx={{ fontSize: "19px" }}>
        Sistema Integrado de Aplicaciones - SIA
      </Typography>
      <Typography sx={{ fontSize: "19px", marginRight: "50px" }}>
        Cerrar Sesion
      </Typography>
    </Stack>
  );
}

export default Header;
