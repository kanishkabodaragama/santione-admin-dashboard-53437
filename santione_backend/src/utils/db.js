/**
 * Simple database connection util - stub for future integration.
 * Replace with an actual DB connector (pg, mysql2, sequelize, etc.)
 */
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || '';
module.exports = {
  getDatabaseUrl: () => DATABASE_URL,
  // You can add a real connect() with your DB library here.
};
