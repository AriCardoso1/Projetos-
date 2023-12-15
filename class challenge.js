class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackType = "Wizard";
        let attackDescription;

        switch (attackType) {
            case "Ninja":
                attackDescription = "shuriken";
                break;
            case "Monk":
                attackDescription = "martial arts";
                break;
            case "Wizard":
                attackDescription = "magic";
                break;
            case "Warrior":
                attackDescription = "sword";
                break;
        }

        console.log(`The ${this.type} type hero, ${this.name}, won the battle using ${attackDescription}.`);
    }
}

let combat = new Hero("Marcos", 22, "Wizard");
combat.attack();
