if (process.env.NODE_ENV !== "development") {
  require("dotenv").config();
}

const app = require("./app");

app.set("port", process.env.PORT || 3000);

const port = app.get("port");

app.listen(port, () => {
  console.log(`Server running on port = ${port}`);
});
