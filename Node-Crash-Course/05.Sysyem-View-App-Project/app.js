const http = require("http");
const os = require("os");
const process = require("process");
const url = require("url");

//!  Format bytes to human-readable format

function formatBytes(bytes, decimal = 2) {
  if (bytes === 0) return "0 bytes";
  // set base unit
  const k = 1024;
  const sizes = ["Bytes", "KB", "BM", "GB", "TB", "PB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat(bytes / Math.pow(k, i)).toFixed(decimal) + "" + sizes[i];
}

//! Format second to human readable time

function formatTime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
}

//! Get CPU info

const getCpuInfo = () => {
  const modal = os.cpus()[0].model;
  const cores = os.cpus().length;
  const architecture = os.arch();
  const loadAvg = os.loadavg();
  return {
    modal,
    cores,
    architecture,
    loadAvg,
  };
};

//! Get Memory info

const getMemoryInfo = () => {
  const totalMemory = formatBytes(os.totalmem());
  const freeMemory = formatBytes(os.freemem());

  const usage = ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2) + "%";

  return { totalMemory, freeMemory, usage };
};

//! Get OS info
const getOsInfo = () => {
  const platform = os.platform();
  const type = os.type();
  const release = os.release();
  const hostName = os.hostname();
  const upTime = formatTime(os.uptime());

  return { platform, type, release, hostName, upTime };
};

//! Get User info

const getUserInfo = () => {
  const user = os.userInfo();
  return user;
};

//! Get Network info
const getNetworkInfo = () => {
  const network = os.networkInterfaces();
};

//! Get Process info
const getProcessInfo = () => {
  const pid = process.pid;
  const title = process.title;
  const nodeVersion = process.version;
  const upTime = formatTime(process.uptime());
  cwd: process.cwd();
  return {
    pid,
    title,
    nodeVersion,
    upTime,
    memoryUsage: {
      rss: formatBytes(process.memoryUsage().rss),
      heapTotal: formatBytes(process.memoryUsage().heapTotal),
      heapUsed: formatBytes(process.memoryUsage().heapUsed),
      external: formatBytes(process.memoryUsage().external),
    },
    env: {
      NODE_ENV: process.env.NODE_ENV || "Not Set",
    },
  };
};

//! HTTP Server

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader("content-Type", "application/json");
  if (parsedUrl.path === "/") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        name: "System-View Info Api",
        description: "Access system stats via simple JSON Routes",
        routes: ["/cpu", "/memory", "/user", "/process", "/network", "/os"],
      })
    );
  } else if (parsedUrl.pathname === "/cpu") {
    res.end(JSON.stringify(getCpuInfo(), null, 2));
  } else if (parsedUrl.pathname === "/memory") {
    res.end(JSON.stringify(getMemoryInfo(), null, 2));
  } else if (parsedUrl.pathname === "/user") {
    res.end(JSON.stringify(getUserInfo(), null, 2));
  } else if (parsedUrl.pathname === "/process") {
    res.end(JSON.stringify(getProcessInfo(), null, 2));
  } else if (parsedUrl.pathname === "/network") {
    res.end(JSON.stringify(getMemoryInfo(), null, 2));
  } else if (parsedUrl.pathname === "/os") {
    res.end(JSON.stringify(getOsInfo(), null, 2));
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "Route not found",
      })
    );
  }
});

//! Start the Server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`System View is running http://localhost:${PORT}`);
});
