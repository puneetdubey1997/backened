const errorMiddleware = (err, req, res, next) => {

    const  status = err.status || 500;
    const  message = err.message || "BACKEND ERROR";
    const  ExtraDetails = err.ExtraDetails || "Error from Backend";

    return  res.status(status).json({ message, ExtraDetails});
};

module.exports =  errorMiddleware;