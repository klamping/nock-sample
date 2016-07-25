var assert = require("assert");
var jservice = require("./jservice");
var nock = require("nock");

var jserviceApi = nock("http://jservice.io/api/");

describe("JService", function() {
  it("should allow category requests", function (done) {
    var expectedCategory = "my category";

    jserviceApi.get("/category?id=10044")
      .reply(200, {
        title: expectedCategory
      });

    jservice.getCategory(10044, function(category) {
      assert.equal(category, expectedCategory);
      done();
    });
  });

  it("should get random questions", function (done) {
    var expectedClue = "This is the clue.";

    jserviceApi.get("/random")
      .reply(200, [{
        question: expectedClue
      }])

    jservice.getRandomQuestion(function(question) {
      assert.equal(question, expectedClue);
      done();
    });
  });
})