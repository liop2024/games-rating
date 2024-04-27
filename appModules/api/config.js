const BASE_URL = 'https://api-code-2.practicum-team.ru';
const endpoints = {
    games: `${BASE_URL}/games`,
};

module.exports = endpoints;

const PATH_TO_RATING_FILE = "./dataset/rating.json";
const WEIGHT = {
  gameplay: 2,
  design: 1,
  idea: 3,
};
module.exports = { PATH_TO_RATING_FILE, WEIGHT };

