import { Typography, Link, Box, Stack } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  const FooterSection = ({ title, children }) => (
    <Stack spacing={1} p={"0 25px"} flex={1} maxWidth={"400px"}>
      <Typography variant="h6" color="primary.contrastText" gutterBottom>
        {title}
      </Typography>
      {children}
    </Stack>
  );

  return (
    <Box
      component="footer"
      paddingBlock={"50px"}
      backgroundColor={"#c5415c"}
      sx={{
        color: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "baseline" }}
        justifyContent="space-evenly"
        textAlign="start"
        gap="50px"
      >
        <FooterSection title="Sobre nosotros">
          <Typography variant="body2" color="primary.contrastText">
            Somos una secretaría enfocada en ofrecer la mejor calidad de
            servicios referidos a las telecomunicaciones
          </Typography>
        </FooterSection>

        <FooterSection title="Contáctenos">
          <Typography variant="body2" color="primary.contrastText">
            Facultad Regional Buenos Aires - Universidad Tecnológica Nacional
            Medrano 951, 4º Piso, Oficina 418, (C1179AAQ) C.A.B.A.
          </Typography>
          <br />
          <Typography variant="body2" color="primary.contrastText">
            Alumnos de Grado o Ingeniería: sau@frba.utn.edu.ar. Alumnos de
            Posgrado: administracion@posgrado.frba.utn.edu.ar. Cursos y Carreras
            de Extensión Universitaria: info@sceu.frba.utn.edu.ar.
          </Typography>
        </FooterSection>

        <FooterSection title="Seguinos">
          <Stack direction="row" spacing={1}>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/" color="inherit">
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Stack>
        </FooterSection>
      </Stack>

      {/* Copyright */}
      <Box mt={5} p={"0 25px"}>
        <Typography variant="body2" color="primary.contrastText" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Sistema Integrado de Aplicaciones TIC
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
