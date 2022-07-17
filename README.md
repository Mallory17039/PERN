# PERN Stack on Ubuntu 20
PERN Stack : Postgres, Express, Rest API, and Node.js

-  Clone the repo
-  `cd PERN`
-  Type `npm i` for server dependencies
-  Run `sudo apt update`
-  Type `sudo apt install postgresql postgresql-contrib`
-  Run `sudo systemctl enable postgresql`
	This will run Postgres on startup
- Create password for the default user
```
sudo -u postgres psql
ALTER USER postgres PASSWORD 'gocougs';
exit
```
-  Run `npm run seed`
-  Type `npx nodemon server/index.js` to start Express
-  Open another terminal `cd client`
-  Run `npm i` for the client dependencies
-  Run `npm start` to start the React client
- Observe the todo items from the database on the page

![PERN gif](https://user-images.githubusercontent.com/77945657/179386038-32d597e0-c1c7-4bbd-8cb6-6d3a549c5a91.gif)
