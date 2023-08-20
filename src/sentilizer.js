const promisify = require("util.promisify");
import { PythonShell } from "python-shell";
let python_shell_run = promisify(PythonShell.run);
import path from "path"; // 1.使用相對路徑

export function sentilize(sentence) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, "."); // 2.使用相對路徑
    let options = {
      pythonPath: "C:\\Users\\fanta\\anaconda3\\python.exe",
      scriptPath: scriptPath, // 3.使用相對路徑
      // scriptPath: '/sentilizer_api_harvey/src',

      args: ["-s", '"' + sentence + '"'],
    };

    python_shell_run("vader.py", options)
      .then((results) => {
        let sentiment = results[0];
        let resp = { sentiment: "Neutral" };
        if (sentiment === "neg") {
          resp.sentiment = "Negative";
        } else if (sentiment === "pos") {
          resp.sentiment = "Positive";
        }
        resolve(resp);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
