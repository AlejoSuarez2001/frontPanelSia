import { Stack, Box } from "@mui/material";
import Card from "./componentes/Card";
import Banner from "./componentes/Banner";
import Header from "./componentes/Header";
import Beneficios from "./componentes/Beneficios";
import MenuImg from "./img/menu.png";
import MenuImg2 from "./img/menu2.png";
import Noticias from "./img/noticias.png";
import Titulo from "./componentes/Titulo";
import Footer from "./componentes/Footer";

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
        {/* Menu Ancho*/}
        <Stack>
          <img
            width={214}
            height={838}
            src={MenuImg}
            alt=""
            style={{
              borderRight: "lightgrey 1px solid",
              position: "fixed",
              marginTop: "64px",
            }}
          ></img>
        </Stack>

        {/* Menu Angosto 
        <Stack>
          <img
            width={67}
            height={838}
            src={MenuImg2}
            alt=""
            style={{
              borderRight: "lightgrey 1px solid",
              position: "fixed",
              marginTop: "64px",
            }}
          ></img>
        </Stack>*/}
        {/**/}
        <div style={{ marginTop: "64px", marginLeft: "214px" }}>
          <Banner />
          <Titulo texto={"Sistemas Institucionales"} />
          <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "50px",
                width: "90%",
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
          </Stack>
          <Titulo texto={"Beneficios de su Cuenta Intitucional"} />
          <Beneficios />
          <Titulo texto={"Noticias"} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              width={"1600px"}
              height={"450px"}
              src={Noticias}
              alt=""
              style={{}}
            ></img>
          </div>
          <Footer />
        </div>
      </Stack>
    </>
  );
}

export default App;
