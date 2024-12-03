// Classe genérica representando um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói (guerreiro, mago, etc.)
    }

    // Método atacar
    atacar() {
        let ataque;
        // Verifica o tipo do herói para determinar o ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não realizou um ataque válido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const mago = new Heroi("Merlin", 150, "mago");
const guerreiro = new Heroi("Arthur", 30, "guerreiro");
const monge = new Heroi("Kenshin", 25, "monge");
const ninja = new Heroi("Hanzo", 28, "ninja");

// Chamando o método atacar para cada herói
mago.atacar();       // Saída: O mago atacou usando magia
guerreiro.atacar();  // Saída: O guerreiro atacou usando espada
monge.atacar();      // Saída: O monge atacou usando artes marciais
ninja.atacar();      // Saída: O ninja atacou usando shuriken
