##Express-Dev

An express wrapper which takes in a [webpack](https://webpack.github.io/) config and retuns you an express app with [webpack dev middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack hot middleware ](https://github.com/glenjamin/webpack-hot-middleware) in the stack. 

```coffeescript
expressDev = require 'express-dev'
config = require './config/webpack.dev.config'
app = expressDev(config)
```

You can add your own middlewares to this app instance just as you would with a standard express instance.

An example of it in useage within an app would look like this 

```coffeescript
path = require 'path'
express = require 'express' 
expressDev = require 'express-dev'
config = require './config/webpack.dev.config'

app = expressDev(config)
app.set 'views', path.join(process.cwd(), 'src', 'views')
app.set 'view engine', 'jade'

router = express.Router()
router.get('/', (req, res, next) -> res.render 'index' )

app.use(router)
app.listen(3000, -> console.log 'listening on 3000')
```

Now you can dev your front end code with hot module reloading if it can do it, or live reloading if it cant. 


