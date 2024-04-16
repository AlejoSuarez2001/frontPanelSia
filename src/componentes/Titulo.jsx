import { Typography } from "@mui/material";

function Titulo(props) {
  const { texto } = props;

  return (
    <>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          marginTop: "55px",
        }}
      >
        {texto}
      </Typography>
      <hr style={{ width: "40%", marginBottom: "40px", opacity: ".5" }} />
    </>
  );
}

export default Titulo;
