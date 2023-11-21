const {registration} = require ('../Schemas/userValid');

module.exports.validateUser = async (req, res, next) => {
    try {
        await registration.validate(req.body)
        return next()
    } catch (error) {
        res.send(error.message);
    }
}