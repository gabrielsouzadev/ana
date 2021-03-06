const service = require('../index')({})

// route without middlewares
service.get('/hi/:name', async (req, res) => {
  return 'Hello ' + req.params.name
})

// route with middlewares
service.get('/hi-m/:name', async (req, res) => {
  return 'Hello ' + req.params.name
}, {}, [(req, res, next) => {
  req.params.name = req.params.name.toUpperCase()
  next()
}])

// start the server
service.start()
