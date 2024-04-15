import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from "@mui/material";

import * as icons from "../icons/exportIcons";

const iconMapping = {
  guaraniAutogestion: icons.svgGuaraniAutogestion,
  biblioteca: icons.svgBiblioteca,
  documentacion: icons.svgDocumentacion,
  bolsaDeTrabajo: icons.svgBolsaDeTrabajo,
  turnos: icons.svgTurnos,
  becas: icons.svgBecas,
  reservaDeAulas: icons.svgReservaDeAulas,
  aulasVirtuales: icons.svgAulasVirtuales,
  sysGestion: icons.svgSysGestion,
  guarani: icons.svgGuarani,
};

function CardComponent(props) {
  const { titulo, descripcion, svg } = props;
  const SvgIcon = iconMapping[svg];

  return (
    <Card
      sx={{
        width: "275px",
        height: "340px",
        boxShadow: "3px 2px 11px 0px rgba(103, 103, 103, 0.25)",
        transition: "0.20s",
        textAlign: "center",
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#fff2f4",
          boxShadow: "3px 2px 11px 0px rgba(59, 59, 59, 0.35)",
          transform: "translateY(-5px)",
          transition: "0.20s",
        },
      }}
    >
      <Box sx={{ height: "5px", backgroundColor: "#c5415c" }}></Box>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            marginBlock: "70px",
            height: 50,
            width: 50,
            backgroundColor: "rgba(250, 215, 222, 0.87)",
            boxShadow: "-1px 1px 19px 41px rgba(250, 215, 222, 0.87)",
          }}
        >
          <img width={95} height={95} src={SvgIcon} alt="" />
        </Stack>
      </Stack>
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h6" sx={{ marginBlock: "9px", fontWeight: "800" }}>
          {titulo}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            fontSize: "12px",
            color: "grey",
            padding: "0px 20px",
            height: "54px",
            marginTop: "22.5px",
          }}
        >
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
