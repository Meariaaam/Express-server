**Table of Contents**
<ins>Project Setup</ins>
Installing Dependencies
Running the Server
Routes
Development Features
Testing
Configuration
Linter
Error Handling
Project Setup

**Create the project directory and navigate to it:**
mkdir hello
cd hello

**Initialize the project:**
npm init -y

**Install dependencies:**
npm install express@5

**Add ESM support in your package.json by including:**
{
  "type": "module"
}

**Installing Dependencies**
**_To get started, install the necessary dependencies for your Express project:_**
npm install express@5

**For development, install the following tools:**
npm install --save-dev nodemon morgan eslint mocha chai supertest cross-env

**Start the server using the following command:**
npm run dev

**_This uses nodemon to automatically restart the server on changes._** **You can also use:**
npm start
This runs the server with node.

**Routes**
_The app provides two routes_
/hello - A basic text response "Hello World".
/api/hello - A JSON response with a message.
These routes are organized in the src/route/hello.js file.

**Development Features**
1. Automatic Server Restarts with Nodemon
_To avoid manually restarting the server every time you make changes, we use Nodemon._

**To start the server with nodemon:**
npm run dev

**2. Logging with Morgan**
We use Morgan for logging HTTP requests.

**_In your src/express.js, we’ve added:_**
import logger from 'morgan'
app.use(logger('dev', { immediate: true }))

**3. Environment Configuration with Dotenv**
Configuration is stored in an **_.env_** file. You can set the port and other configurations there.

Example **_.env_** file:
PORT=3001

**We use dotenv to read this configuration in both nodemon and the node command:**
npm run dev

**4. Error Handling**
We have custom error handlers to handle 404 (Not Found) and global errors. This ensures the server doesn't crash on errors, and returns proper error messages.

**Testing**
Unit testing is set up with Mocha, Chai, and Supertest. Tests are located in the test/route/hello.test.js file.

**Run the tests with:**
npm test
This will run the unit tests for the Express routes and verify that the server is returning correct responses.

**Linter**
_To maintain consistent code quality,_ **_ESLint_** is configured. You can run the linter with:
npm run eslint

**Fix any linting issues with:**
npm run eslint:fix

**Configuration**
.env File

**You can configure your app via environment variables in the**_.env_ **file. Here's an example configuration:**
PORT=3001

**.gitignore**
**Make sure to add a** _.gitignore_ **file to exclude unnecessary files such as _node_modules_ and** _.env_
node_modules/
.env
