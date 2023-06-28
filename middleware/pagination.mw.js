module.exports.pagination = async(req, res, next) => {
  try {
    const {query} = req;
    const page = Number(query.page);
    const pagination = {
      limit: 5
    };
    pagination.offset = page ? pagination.limit * (page - 1) : 0;
    req.pagination = pagination;
    next();
  } catch(err) {
    next(err);
  }
}