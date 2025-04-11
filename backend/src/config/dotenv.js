const { env } = process;

module.exports = {
  port: parseInt(env.PORT),

  db: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
  },
};