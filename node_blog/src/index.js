const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middlewares/SortMiddleware');

const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

db.connect();

// public img
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// http logger
app.use(morgan('combined'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sortMiddleware);

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (filed, sort) => {
                const sortType = filed === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${filed}&type=${type}">
						<span class="${icon}"></span>
						</a>`;
            },
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
