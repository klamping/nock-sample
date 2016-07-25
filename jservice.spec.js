var assert = require("assert");
var jservice = require("./jservice");

describe("JService", function() {
  it("should allow category requests", function (done) {
    var expectedCategory = "classic lit";

    jservice.getCategory(10044, function(category) {
      assert.equal(category, expectedCategory);
      done();
    });
  });

  it("should get random questions", function (done) {
    var expectedClue = "This is the clue.";

    jservice.getRandomQuestion(function(question) {
      assert.equal(question, expectedClue);
      done();
    });
  });
})