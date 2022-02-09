import Sequelize from "sequelize";

const { POSTGRES_URI, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

console.log({
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
});
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  dialect: "postgres",
});

export const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};
