import { Typography, useMediaQuery } from "@mui/material";

function Titulo({ texto }) {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <>
      <Typography
        style={{
          textAlign: "center",
          marginTop: "55px",
          padding: "0 15px",
          fontSize: matches ? "30px" : "25px",
        }}
      >
        {texto}
      </Typography>
      <hr style={{ width: "30%", marginBottom: "40px", opacity: ".5" }} />
    </>
  );
}

export default Titulo;
