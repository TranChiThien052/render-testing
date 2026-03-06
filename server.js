const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  console.log({ message: "Backend chạy trên Render!"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server chạy ở cổng ${port}`);
});
