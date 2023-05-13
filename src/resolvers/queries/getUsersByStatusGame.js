const { transformGame, transformRound, transformUser } = require("../merge");

module.exports = async (_, { statusGame, excludeMe }, { models }) => {
  try {
    const users = await models.User.find({
      $and: [{ statusGame: statusGame }, { _id: { $ne: excludeMe } }],
    });
    return users.map((user) => transformUser(user));
  } catch (err) {
    throw err;
  }
};