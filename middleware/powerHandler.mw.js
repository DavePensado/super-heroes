const {Power} = require('../models')

module.exports.powerHandler = async(req, res, next) => {
  try {
    const {power} = req.body
    
    if(power && power.length > 0) {
      for(let i = 0; i < power.length; i++) {
        await Power.findOrCreate({
          where: {
            name: power[i]
          },
          default: {
            name: power[i]
          }
        })
      }
    }

    next()
  } catch(err) {
    next(err)
  }
}