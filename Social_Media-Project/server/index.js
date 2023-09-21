import express from "express";

const app = express();
app.use(express.json);

const PORT = 3000;

app.get("/api", (req, res) => {
  return res.send("MARKO");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
