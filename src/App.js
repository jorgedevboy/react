import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Select } from "@mui/material";

function App() {
  const [fields, setFields] = useState([]);
  const [activateText, setActivateText] = useState(false);
  const [activateSelect, setActivateSelect] = useState(false);
  const [activateOptions, setActivateOptions] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);
  const [textFieldData, setTextFieldData] = useState([]);

  const genereateFields = (field) => {
    if (field.component === "text") {
      return (
        <div className="textField">
          <TextField
            id="outlined-basic"
            label={field.label}
            variant="outlined"
          />
        </div>
      );
    }
    if (field.component === "select") {
      return (
        <div className="selectField">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={field.label}
          >
          </Select>
        </div>
      );
    }
    if (field.component === "options") {
      return (
        <div className="radioField">
          <input
            type="radio"
            id={field.label}
            name={field.label}
            value={field.label}
          />
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      );
    }
  };
  const createTextField = () => {
    setActivateText(true);
  };
  const createSelectField = () => {
    setActivateSelect(true);
  };

  const createOptionField = () => {
    setActivateOptions(true);
  };
  const storeSelectField = (event) => {
    event.preventDefault();
    console.log(event.target.labelData);
    const labelData = event.target.labelData.value;
    setFields((prevState) => [
      ...prevState,
      { component: "select", label: labelData },
    ]);
    setActivateSelect(false);
  };
  const storeOptionsField = (event) => {
    event.preventDefault();
    console.log(event.target.labelData);
    const labelData = event.target.labelData.value;
    setFields((prevState) => [
      ...prevState,
      { component: "options", label: labelData },
    ]);
    setActivateOptions(false);
  };
  const storeTextField = (event) => {
    event.preventDefault();
    const labelData = event.target.labelData.value;
    setFields((prevState) => [
      ...prevState,
      { component: "text", label: labelData },
    ]);
    setActivateText(false);
  };
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Stack spacing={2} direction="column">
                <Button
                  variant="contained"
                  color="success"
                  onClick={createTextField}
                >
                  Crear input de texto
                </Button>
                {activateText && (
                  <>
                    <form onSubmit={storeTextField}>
                      <TextField
                        id="labelTextfield"
                        label="Etiqueta de tu input de texto"
                        variant="outlined"
                        name="labelData"
                        onChange={(e) => textFieldData(e.target.value)}
                      />
                      <Button variant="contained" color="success" type="submit">
                        Agregar
                      </Button>
                    </form>
                  </>
                )}

                <Button variant="contained" onClick={createSelectField}>
                  Crear input de select
                </Button>
                {activateSelect && (
                  <>
                    <form onSubmit={storeSelectField}>
                      <TextField
                        id="labelTextfield"
                        label="Etiqueta de tu input de texto"
                        variant="outlined"
                        name="labelData"
                      />

                      <Grid item xs={8}>
                        <Box sx={{ m: 3 }}>
                          <Button
                            variant="contained"
                            color="success"
                            type="submit"
                          >
                            Agregar
                          </Button>
                        </Box>
                      </Grid>
                    </form>
                  </>
                )}
                <Button variant="outlined" onClick={createOptionField}>
                  Crear input de opciones
                </Button>
                {activateOptions && (
                  <>
                    <form onSubmit={storeOptionsField}>
                      <TextField
                        id="labelTextfield"
                        label="Etiqueta de tu input de texto"
                        variant="outlined"
                        name="labelData"
                      />

                      <Grid item xs={8}>
                        <Box sx={{ m: 3 }}>
                          <Button
                            variant="contained"
                            color="success"
                            type="submit"
                          >
                            Agregar
                          </Button>
                        </Box>
                      </Grid>
                    </form>
                  </>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {fields.map((field) => genereateFields(field))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <h3>JSON</h3>
          <div>
            <pre>{JSON.stringify(fields, null, 2)}</pre>
          </div>
          ;
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
