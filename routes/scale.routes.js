const express = require('express')
const scaleCtrl = require('../controllers/scale.controller')
const authCtrl = require('../controllers/auth.controller')

const router = express.Router()

router.route('/api/scales')
  .get(scaleCtrl.list)
  .post(scaleCtrl.create)

router.route('/api/scalestoapp')
  .get(scaleCtrl.listToApp)


router.route('/api/scales/:scaleId')
  .get(authCtrl.requireSignin, scaleCtrl.read)
  .put(authCtrl.requireSignin, scaleCtrl.update)
  .delete(authCtrl.requireSignin, scaleCtrl.remove)


router.param('scaleId', scaleCtrl.scaleByID)

module.exports = router
