const fs = require("fs");
const { resolve } = require("path");

const readAbleStream = fs.createReadStream(resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});

const writeAbleStream = fs.createWriteStream(resolve(__dirname, "output.txt"));

readAbleStream.on("readable", () => {
  try {
    // process.stdout.write(`[${readAbleStream.read()}]`);
    writeAbleStream.write(`${readAbleStream.read()}\n`);
  } catch {}
});

readAbleStream.on("end", () => {
  writeAbleStream.end();
});
