const fs = require('fs')
const { Pool } = require('pg')

const databaseUrl = "postgres://postgres:gocougs@localhost";
const pool = new Pool({
    connectionString: databaseUrl,
})

const dbQuery = fs.readFileSync('server/database.sql', { encoding: 'utf8' })
pool.query(dbQuery, (err, res) => {
                console.log(err, res)
                console.log('Database created!')
                pool.end()
})

const newDatabaseUrl = "postgres://postgres:gocougs@localhost/perntodo";
const seedPool = new Pool({
    connectionString: databaseUrl,
})

const seedQuery = fs.readFileSync('server/seed.sql', { encoding: 'utf8' })
seedPool.query(seedQuery, (err, res) => {
                console.log(err, res)
                console.log('Database seeded!')
                seedPool.end()
})
