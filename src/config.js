var path = require('path');

module.exports = {
  dir: __dirname,
  "public": path.join(__dirname + '../../../web/public'),
  jade: path.join(__dirname + '../../../web/jade'),
  defaultPort: 2248,
  connection: {
    production: {
      user: "root",
      password: '',
      host: '',
      database: '',
      port: 3306,
      pool: 250,
      idleTimeoutMillis: 30000,
      timeout: 5000
    },
    development: {
      user: "root",
      password: '',
      host: '',
      database: '',
      port: 3306,
      pool: 250,
      idleTimeoutMillis: 30000,
      timeout: 5000
    },
    test: {
      user: "root",
      password: '',
      host: '',
      database: '',
      port: 3306,
      pool: 250,
      idleTimeoutMillis: 30000,
      timeout: 5000
    }
  },
  mail: {
    user: "发送邮箱账号",
    password: "发送邮箱密码",
    host: "mail.qq.com",
    ssl: true,
    smtpPort: 465,
    defaultTo: "接收邮箱账号",
    defaultText: "lianwumonitor",
    defaultHtml: "lianwumonitor"
  },
  buddhaEyeMail: {
    user: "发送邮箱账号",
    password: "发送邮箱密码",
    host: "mail.qq.com",
    ssl: true,
    smtpPort: 465,
    defaultTo: "接收邮箱账号",
    defaultText: "lianwumonitor",
    defaultHtml: "lianwumonitor"
  },
  crons: {
    // "mongodb_checker": "0 * * * * *",
    "health_checker": "0 * * * * * "
  },
  jobs: {
    mongodb_checker: {
      conf: ["127.0.0.1:28017"]
    },
  }
};