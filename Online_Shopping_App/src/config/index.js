//config/index.js
const dotEnv = require("dotenv");

// Nếu không có NODE_ENV thì load mặc định từ .env
if (!process.env.NODE_ENV) {
  dotEnv.config();
} else {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
}
console.log('Loaded ENV:', {
  NODE_ENV: process.env.NODE_ENV,
  DB_URL: process.env.MONGODB_URI,
});

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
