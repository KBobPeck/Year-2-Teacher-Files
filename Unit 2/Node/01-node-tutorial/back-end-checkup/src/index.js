import { default as http } from "http";
import { default as fs } from "fs";
import { default as path } from "path";
import { URL } from "url";

import { default as chalk } from "chalk";
// const chalk = require("chalk");
import { default as sass } from "sass";
import { default as mime } from "mime-types";

function logStatus(statusCode, req) {
  let method = req.method;
  let scString = statusCode + ": " + http.STATUS_CODES[statusCode];
  switch (statusCode) {
    case 200:
      scString = chalk.green(scString);
      break;
    case 400:
      scString = chalk.red(scString);
      break;
    case 404:
      scString = chalk.bgRed(scString);
      break;
  }
  console.log(`${chalk.blue(method)} | ${req.url} | ${scString}`);
}

http
  .createServer((req, res) => {
    let reqUrl = new URL(req.url, "http://localhost:8080");
    let statusCode = 200;
    let mimeCheck = mime.lookup(reqUrl.pathname);
    let dirReggie = new RegExp(/\/$/);

    if (mimeCheck == false) {
      if (dirReggie.test(reqUrl.pathname)) {
        if (reqUrl.pathname == "/") {
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            "Content-Type": "text/html",
          });
          res.write(fs.readFileSync("./public/index.html"));
        } else {
          if (
            fs.existsSync(path.join("./public", reqUrl.pathname, "index.html"))
          ) {
            res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
              "Content-Type": "text/html",
            });
            res.write(
              fs.readFileSync(
                path.join("./public", reqUrl.pathname, "index.html")
              )
            );
          } else {
            statusCode = 400;
            res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
              "Content-Type": "text/html",
            });
            res.write(fs.readFileSync("./errors/400.html"));
          }
        }
      } else {
        if (path.extname(reqUrl.pathname) == "") {
          statusCode = 301;
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            Location: `${reqUrl.pathname}/`,
          });
        } else {
          statusCode = 400;
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            "Content-Type": "text/html",
          });
          res.write(fs.readFileSync("./errors/400.html"));
        }
      }
    } else {
      let extension = path.extname(reqUrl.pathname);

      if ((extension == ".css") | (extension == ".scss")) {
        let reggie = new RegExp(/(\.css|\.min\.css|\.scss)$/, "i");
        let regResult = reggie.exec(reqUrl.pathname);
        let trueExt = regResult[0];
        let sassPath = reqUrl.pathname.replace(trueExt, ".scss");
        if (fs.existsSync(path.join("./public", reqUrl.pathname))) {
          //If the file exists just serve it.
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            "Content-Type": mimeCheck,
          });
          res.write(fs.readFileSync(path.join("./public", reqUrl.pathname)));
        } else if (fs.existsSync(path.join("./public", sassPath))) {
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            "Content-Type": mimeCheck,
          });
          if (trueExt == ".css") {
            res.write(
              sass.renderSync({
                file: path.join("./public", sassPath),
                outputStyle: "expanded",
              }).css
            );
          } else {
            res.write(
              sass.renderSync({
                file: path.join("./public", sassPath),
                outputStyle: "compressed",
              }).css
            );
          }
        } else {
          statusCode = 404;
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            "Content-Type": "text/html",
          });
          res.write(fs.readFileSync("./errors/404.html"));
        }

        //Use reggie to determine if .css or .min.css
      } else {
        if (fs.existsSync(path.join("./public", reqUrl.pathname))) {
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            "Content-Type": mimeCheck,
          });
          res.write(fs.readFileSync(path.join("./public", reqUrl.pathname)));
        } else {
          statusCode = 404;
          res.writeHead(statusCode, http.STATUS_CODES[statusCode], {
            "Content-Type": "text/html",
          });
          res.write(fs.readFileSync("./errors/404.html"));
        }
      }
    }

    logStatus(statusCode, req);
    res.end();
  })
  .listen(8080);
