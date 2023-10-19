module.exports = {
  multipleToObject: function (mongo) {
    return mongo.map((mongo) => mongo.toObject());
  },
  singleToObject: function (single) {
    return single ? single.toObject() : single;
  },
};
