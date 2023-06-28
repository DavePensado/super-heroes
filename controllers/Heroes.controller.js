const {Hero, Power} = require('../models');

module.exports.createOne = async(req, res, next) => {
  try {
    const {body, files} = req;

    const createdHero = await Hero.create(body);

    if(files) {
      const images = files.map(file => ({
        imageUrl: file.filename,
        heroId: createdHero.id
      })) 
      await Images.bulkCreate(images)
    }

    if(body.power) {
      for(let i = 0; i < body.power.length; i++) {
        const powerInstance = await Power.findAll({
          where: {
            name: body.power[i]
          }
        })
        await createdHero.addPower(powerInstance)
      }
    }

    return res.status(201).send({data: createdHero});
  } catch(err) {
    next(err)
  }
}

module.exports.getAll = async(req, res, next) => {
  try {
    const {pagination} = req;
    const foundedHero = await Hero.findAll({
      ...pagination
    });
    res.status(200).send({data: foundedHero});
  } catch(err) {
    next(err)
  }
}

module.exports.deleteOne = async(req, res, next) => {
  try {
    const {params: {heroId}} = req;
    const deleted = await Hero.destroy({
      where: {
        id: heroId
      }
    })
    res.status(200).send({meta: {
      deletedCount: deleted
    }});
  } catch(err) {
    next(err)
  }
}

module.exports.updateOne = async(req, res, next) => {
  try{
    const {params: {heroId}, body, files} = req;

    const heroInstance = await Hero.findByPk(heroId)

    if(files) {
      const images = files.map(file => ({
        imageUrl: file.filename,
        heroId: heroInstance.id
      })) 
      await Images.bulkCreate(images)
    }
    const [rowCount, updated] = await Hero.update(body, {
      where: {
        id: heroId
      }, 
      returning: true
    });

    if(body.power) {
      for(let i = 0; i < body.power.length; i++) {
        const powerInstance = await Power.findAll({
          where: {
            name: body.power[i]
          }
        })
        await heroInstance.addPower(powerInstance)
      }
    }

    res.status(200).send({data: updated});
  } catch(err) {
    next(err)
  }
}

module.exports.getHeroWithPower = async(req, res, next) => {
  try {
    const {params: heroId} = req;
    const heroWithPower = await Hero.findAll({
      where: {
        id: heroId
      },
      incldue: [{
        model: Power
      }]
    })
    res.status(200).send({data: heroWithPower})
  } catch(err) {
    next(err);
  }
}