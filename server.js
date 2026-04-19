const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

/* Ingresar Token de Decolecta */
const TOKEN = "sk_11586.M1hq6tGwNoXqWEE62tb7ssYZUbxOijwV";

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Ruta para consultar DNI
app.get("/api/dni/:numero", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.decolecta.com/v1/reniec/dni?numero=${req.params.numero}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al consultar API DNI" });
  }
});

// Ruta para consultar RUC
app.get("/api/ruc/:numero", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.decolecta.com/v1/sunat/ruc?numero=${req.params.numero}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al consultar API RUC" });
  }
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
