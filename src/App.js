import { Stack, Box } from "@mui/material";
import Card from "./componentes/Card";
import Banner from "./componentes/Banner";
import Header from "./componentes/Header";
import Beneficios from "./componentes/Beneficios";
import MenuImg from "./img/menu.png";
import MenuImg2 from "./img/menu2.png";
import Titulo from "./componentes/Titulo";

function App() {
  const datos = [
    {
      titulo: "Guarani Autogestion",
      descripcion:
        "Una plataforma que permite a los estudiantes realizar tramites y visualizar su historia académica.",
      svg: "guaraniAutogestion",
    },
    {
      titulo: "Biblioteca",
      descripcion:
        "Entorno dedicado a la reserva de libros de la biblioteca de la facultad.",
      svg: "biblioteca",
    },
    {
      titulo: "Documentacion",
      descripcion:
        "Herramienta web donde se encuentran los manuales de usuario junto con otros procedimientos detallados.",
      svg: "documentacion",
    },
    {
      titulo: "Bolsa de Trabajo",
      descripcion:
        "Portal donde los alumnos pueden acceder a las oportunidades laborales que ofrece la facultad.",
      svg: "bolsaDeTrabajo",
    },
    {
      titulo: "Turnos",
      descripcion: "Sistema de gestión de turnos médicos.",
      svg: "turnos",
    },
    {
      titulo: "Becas",
      descripcion:
        "Servicio dedicado a la administración de becas que genera la facultad y agentes externos.",
      svg: "becas",
    },
    {
      titulo: "Reserva de Aulas",
      descripcion: "Sistema que permite la reserva de aulas de la facultad.",
      svg: "reservaDeAulas",
    },
    {
      titulo: "Aulas Virtuales",
      descripcion:
        "Plataforma en línea donde los profesores cargan material educativo para sus alumnos.",
      svg: "aulasVirtuales",
    },
    {
      titulo: "SysGestion",
      descripcion:
        "Sitio web de gestión de cursos brindados por la Secretaría de Cultura y Extensión Universitaria.",
      svg: "sysGestion",
    },
    {
      titulo: "Guarani",
      descripcion:
        "Sistema de gestión de alumnos que registra y administra todas las actividades académicas de la universidad.",
      svg: "guarani",
    },
  ];

  return (
    <>
      <Header />

      {/**/}
      <Stack sx={{ flexDirection: "row" }}>
        {/* Menu Ancho 
        <Stack>
          <img width={214} height={838} src={MenuImg} alt=""></img>
          <img
            width={209}
            height={5000}
            src={MenuImg}
            alt=""
            style={{ objectFit: "contain", borderRight: "lightgrey 1px solid" }}
          ></img>
        </Stack>*/}
        {/* Menu Angosto*/}
        <Stack>
          <img width={67} height={838} src={MenuImg2} alt=""></img>
          <img
            width={62}
            height={5000}
            src={MenuImg}
            alt=""
            style={{ objectFit: "contain", borderRight: "lightgrey 1px solid" }}
          ></img>
        </Stack> 
        {/**/}

        <div>
          <Banner />
          <Titulo texto={"Sistemas Institucionales"} />
          <Box sx={{}}>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "50px",
                margin: "60px",
              }}
            >
              {datos.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  svg={item.svg}
                />
              ))}
            </Stack>
            <Titulo texto={"Beneficios de su Cuenta Intitucional"} />
            <Beneficios />
            <Titulo texto={"Titulo Aparte Descriptivo"} />
          </Box>
        </div>
      </Stack>
    </>
  );
}

export default App;
