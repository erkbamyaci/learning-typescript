import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import messenger from './src/controllers/createMessage';
import {Settings} from "./settings";

const app = express();

const messages = new messenger(Settings.PORT);

const database: string = 'mongodb://localhost:27017/linkedin_apis';

// mongoose connection
mongoose.connect(database, {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// generic
function nameCreator<T>(name: T): T {
    return name;
}

let myName = nameCreator<string>('Erk,');

interface Warriors {
    weapon: string,
    skills: number,
}

interface Warriors {
    name: string;
}

let ninja: Warriors = {
    weapon: 'Shuriken',
    skills: 5,
    name: 'Erk',
}

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(ninja)
);

app.listen(Settings.PORT, () =>
    console.log(myName, messages.messagePrint())
);
