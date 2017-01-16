mocha.setup('bdd');
onload = function(){
  mocha.checkLeaks().run();
};
