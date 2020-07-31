const app = require("./app");

require("dotenv").config();

app.set("port", process.env.PORT || 3000);

const port = app.get("port");

app.listen(port, () => {
  console.log(`Server running on port = ${port}`);
});
