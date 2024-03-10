const  validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {

        const status = 422;
        const message = "Fill the Input properly";
        const ExtraDetails = err.errors[0].message;
        const error = {

            status,
            message,
            ExtraDetails,
        };
        console.log(error);
        next(error);
        // const message = err.errors[0].message;
        // res.status(400).json({msg: message });
    }

};

module.exports = validate;