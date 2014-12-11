describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/sockets/');
  });

  it('title is good', function(){
      expect("#title").to.have.text(/test title/);
  });

  it('button label is good', function(){
    casper.then(function(){
      expect("#like").to.have.text("I like you ");
    });
  });

  it('changes title when button pressed', function() {
    casper.then(function(){
      casper.mouseEvent('click', '#like');
      casper.then(function(){
       expect("#title").to.have.text("I like you too");
      });
    });
  });


  

});