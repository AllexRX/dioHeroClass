// desafio final do bootcamp de lógica de programação da DIO

const ataques = {
   mago: "magia",
   guerreiro: "espada",
   arqueiro: "arco e flecha",
   monge: "artes marciais",
   ninja: "shuriken"
};

class hero {
   constructor(name, age, type){
      this.name = name;
      this.age = age;
      this.type = type;
   }
   attack(){
      const attackType = ataques[this.type];
      console.log(`O ${this.type} ${this.name} atacou usando ${attackType}`);
   }
}

let heroi1 = new hero("Gandalf", 2019, "mago");
heroi1.attack(); // Saída: O mago Gandalf atacou usando magia
heroi1.type = "guerreiro";
heroi1.attack(); // Saída: O guerreiro Gandalf atacou usando espada

heroi2222 = new hero("Legolas", 2931, "arqueiro");
heroi2222.attack(); // Saída: O arqueiro Legolas atacou usando arco e flecha