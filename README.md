# PERN Stack on Ubuntu 20
PERN Stack : Postgres, Express, Rest API, and Node.js

-  Clone the repo
-  `cd PERN`
-  Type `npm i` for server dependencies
-  Run `sudo apt update`
-  Type `sudo apt install postgresql postgresql-contrib`
-  Run `sudo systemctl enable postgresql`
	This will run postgres on startup
- Create password for the default user
```
sudo -u postgres psql
ALTER USER postgres PASSWORD 'gocougs';
exit
```
-  RUN `npm run seed`
-  `npx nodemon server/index.js`
-  Open another terminal `cd client`
-  Run `npm i` for the client dependencies
-  Run `npm start` to start the client
- Observe the todo items from the database on the page

