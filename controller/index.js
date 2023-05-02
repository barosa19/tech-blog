const router = require("express").Router();
const homeRoutes = require("./home-routes");
const APIroutes = require('./api')

router.use('/api', APIroutes)
router.use(homeRoutes);

module.exports = router;
