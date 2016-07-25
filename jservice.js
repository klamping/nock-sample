var request = require("request");

var jserviceApi = request.defaults({
  baseUrl: "http://jservice.io/api/"
});

module.exports = {
  getCategory: function(id, cb) {
    jserviceApi.get("/category?id=" + id, function (error, response, body) {
      var category = JSON.parse(body);
      cb(category.title);
    });
  },
  getRandomQuestion: function(cb) {
    jserviceApi.get("/random", function (error, response, body) {
      var question = JSON.parse(body)[0];
      cb(question.question);
    });
  }
};