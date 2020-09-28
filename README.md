# SingleStone Node.js API Technical Challenge

---
## Features
```
Provides admin user authentication
>It wasn't stated in the requirements.  However, I decided to include it for fun.

- Provides for CRUD action methods on Contacts as stated in the requirements.
- Tests are forthcoming using Jest and Supertest.
- MongoDB Atlas was used as a data source.
- I am providing dev and testing environments that are managed using npm scripts and env-cmd.
- I use Nodemon for hot reloading, and morgan for logging.

```

---

## Requirements

### MongoDB Atlas
- Click on the following link to create a free account on MongoDB Atlas: 
[MongoDB Atlas Signin](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=bing&utm_campaign=bs_americas_united_states_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=355813668&msclkid=4dc4cc61a5a01202e5929313a914bed0)
Please create a Cluster, and two collections: one for dev, and one for testing.
- Once the collections are created, the connection strings should be entered into the respective env files 
contained in the `App/config` directory.
For example, in the `App/Config/dev.env: `
```
MONGODB_URI=mongodb+srv://<username>:<password>@redbonzaicluster.pe7qd.mongodb.net/<dbname>?retryWrites=true&w=majority
```
 - It would be the same in the `test.env` env file, except, the database would change.
---
### The Postman Collection below
> Click the button below to access the Singlestone Node API Postman Collection.
[![Singlestone Node API Postman Collection](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/deaf0570f406e75dcb40)
---

## Getting Started
 - run `npm install`
 - if the port is different from 3200, add that to the PORT variable in the `./App/dev.env`, and in `./App/test.env` files.
 - Click on the Postman Collection button above to import the collection, and begin to test the CRUD functions.
---


## Contact Me:  
- [Christian@redbonzai.com](mailto:christian@redbonzai.com)  
- [Via LinkedIn: Christian Dominguez](https://www.linkedin.com/in/cdominguez-burke)
- [By Phone: (346) 221-9152] 
