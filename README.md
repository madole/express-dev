[![Build Status](https://api.travis-ci.org/madole/express-dev.svg)](https://api.travis-ci.org/madole/express-dev.svg) 
[![npm version](https://badge.fury.io/js/express-dev.svg)](http://badge.fury.io/js/express-dev)

##Express-Dev

An express wrapper which takes in a [webpack](https://webpack.github.io/) config and returns you an express app with [webpack dev middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack hot middleware ](https://github.com/glenjamin/webpack-hot-middleware) in the stack. 

```coffeescript
expressDev = require 'express-dev'
config = require './config/webpack.dev.config'
app = expressDev(config)
```

You can add your own middlewares to this app instance just as you would with a standard express instance.

An example of it in usage within an app would look like this 

```coffeescript
path = require 'path'
{Router} = require 'express' 
expressDev = require 'express-dev'
config = require './config/webpack.dev.config'

app = expressDev(config)
app.set 'views', path.join(process.cwd(), 'src', 'views')
app.set 'view engine', 'jade'

router = new Router()
router.get('/', (req, res, next) -> res.render 'index' )

app.use(router)
app.listen(3000, -> console.log 'listening on 3000')
```

JS Example
```javascript
import path from 'path';
import { Router } from 'express';
import expressDev from 'express-dev';
import config from './config/webpack.dev.config';

const app = expressDev(config);
app.set('views', path.join(process.cwd(), 'src', 'views'));
app.set('view engine', 'jade');

const router = new Router();
router.get('/', (req, res, next) => res.render('index'));

app.use(router);
app.listen(3000, () => console.log('listening on port 3000'));
```

Now you can dev your front end code with hot module reloading if it can do it, or live reloading if it cant. 


