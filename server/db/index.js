const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:RThcE5aMgHt4@ep-lingering-term-95990760-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb",
  ssl: {
    rejectUnauthorized: false, // Use only in development; remove in production
  },
},
module.exports = {
  query: (text, params) => pool.query(text, params),
})