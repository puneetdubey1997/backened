
const  express  = require("express");
const  router  = express.Router();
// const  {home ,register}  =  require("../controllers/auth-controller");
const  authcontroller  =  require("../controllers/auth-controller");
const  signupSchema  =  require("../validators/auth-validator");
const  validates  = require("../middlewares/validate-middleware");

// router.get("/",(req,res) => {

//     res.status(200).send("puneet dubey is here using router");
// });


router.route("/").get( authcontroller.home);
router.route("/register").post(validates(signupSchema), authcontroller.register);
router.route("/login").post( authcontroller.login);

// router.route("/").get((req,res) => {

//     res.status(200).send("puneet dubey is here using router");
// });

// app.get("/register",(req,res) => {

//     res.status(200).send("registration page");
// });

// router.route("/register").get((req,res) => {
//     res.status(200).send("welcome at the registeration page");
// });


module.exports = router;