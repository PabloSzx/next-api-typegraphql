const fs = require("fs");

fs.exists(".env", (exists) => {
  if (!exists) {
    fs.writeFile(
      ".env",
      ``,
      {
        encoding: "utf-8",
      },
      (err) => {
        if (err) console.error(err);
      }
    );
  }
});

module.exports = {
  experimental: { workerThreads: true, modern: true },
  poweredByHeader: false,
};
