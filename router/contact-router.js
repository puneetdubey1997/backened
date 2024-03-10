
const  express  = require("express");
const  router  = express.Router();
// const  {home ,register}  =  require("../controllers/auth-controller");
const  ContactForm  =  require("../controllers/contact-controller");



router.route("/contact").post( ContactForm);



module.exports = router;