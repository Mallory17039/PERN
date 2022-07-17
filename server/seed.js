const fs = require('fs')
const { Pool } = require('pg')

const databaseUrl = "postgres://postgres:postgres@localHost:5432/perntodo";
const pool = new Pool({
    connectionString: databaseUrl,
})

const seedQuery = fs.readFileSync('database.sql', { encoding: 'utf8' })
pool.query(seedQuery, (err, res) => {
		console.log(err, res)
		console.log('Seeding Completed!')
		pool.end()
})
