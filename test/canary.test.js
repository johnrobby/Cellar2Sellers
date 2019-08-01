var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();
var expect = chai.expect();
var validation = require('../validation');
var unvalidation = require('../unvalidation');

chai.use(chaiHttp);

describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(true).to.be.true;
  });
});
//This should test the validation
describe("test the validation", function(){
  it("The password should return true if thre is atleast one capital letter", function(){
    expect(validation("Test1!")).to.equal(true);
  });


  it("The password should return false if there is not atleaset one capital letter", function(){
    expect(validation("test1!")).to.equal(false);
  });

  it("The password should return true if there is atleast one number", function(){
    expect(validation("Test1!")).to.equal(true);
  });
  
  it("The password should return false if there is no atlease one number", function(){
    expect(validation("Test!!")).to.equal(false);
  });

  it("The password should return true if the password is at least 6 characters long", function(){
    expect(validation("Test1!")).to.equal(true);
  });

  it("The password should return false if the password is not at least 6 characters long", function(){
    expect(validation("Tet1!")).to.equal(false);
  });
});  

describe("Test the unvalidation", function(){
  it("The user name should return true if it has at least one capital letter", function(){
    expect(unvalidation("Name1")).to.equal(true);
  });

  it("The user name should return false if there is not at least one capital letter", function(){
    expect(unvalidation("name1")).to.equal(false);
  });

  it("The user name should return true if it has at least one number", function(){
    expect(unvalidation("Name1")).to.equal(true);
  });

  it("The user name should return false if there is not at least one number", function(){
    expect(unvalidation("Namee")).to.equal(false);
  });
});
//This should test the login validation for user name and password
// descibe("test password", function(){
//   it("The password should have a capital letter", function(){
//     expect()
//   }).to.have.lengthOf(8);
//   expect(password).to.have('uppercase');
// });
//This should test the data base pull 
db.get(winesnob1, function(err, doc){
  should.exist(doc);
  should.not.exist(err);
  doc.should.be(object);
});
//this should test the server is working
it('should list ALL blobs on /profiles GET', function(done) {
  chai.request(server)
    .get('/profiles')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});
//this should test the get all, get, post, put and delete functions
describe('profiles', function() {
  it('should list ALL profiles on /profiles GET');
  it('should list a SINGLE profiles on /profiles/<id> GET');
  it('should add a SINGLE profiles on /profiles POST');
  it('should update a SINGLE profiles on /profiles/<id> PUT');
  it('should delete a SINGLE profiles on /profiles/<id> DELETE');
});

