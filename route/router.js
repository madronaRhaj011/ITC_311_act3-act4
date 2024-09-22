const  express = require('express');
const router = express.Router();
const master = require('../controller/master');

router.get('/', master.showIndex);
router.get('/aboutMe', master.showAboutMe);
router.get('/contactMe', master.showContactMe);
router.get('/options', master.showOptions);
router.get('/secret', master.showSecret);

module.exports = router;