var http = require('http');

function helloWorld (request, response) {
  var varList = {'Content-Type': 'text/html'};
  var greeting = 'Hello Paolo!';
  response.writeHead(200, varList);
  response.end(greeting);

  var sentryIce = new IceType('Sentry', 'Sentry is one of the main subtypes of ice the Corporation uses to protect his/her servers. Sentries tend to be the more destructive and damaging of ice, with ice that can trace, tag, and damage the Runner or trash parts of his/her rig. Sentries are broken by killers.');
  var HassBioriod = new Corporation('Hass-Bioroid');

  var ichi10 = new Ice('Ichi 1.0', sentryIce, HassBioriod, 4, 5);
  console.log(ichi10.activate());
}

var server = http.createServer(helloWorld);

server.listen(8080);

class Corporation {
  constructor(name) {
    this.name = name;
  }
}

class IceType {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

class Ice {
  constructor(name, type, corportation, strength, cost, subroutines){
    this.name = name;
    this.type = type;
    this.corportation = corportation;
    this.strength = strength;
    this.cost = cost;
    this.subroutines = subroutines;
  }

  activate() {
    return this.name + " is activated!";
  }
}

class Dog {
  constructor(breed, weight) {
    this.breed = breed;
    this.weight = weight;
  }

  eat(quantity) {
    this.weight = this.weight + quantity;
  }
}
