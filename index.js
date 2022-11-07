class Warrior {
    constructor(name, hitPoints, hp) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.hp = hp;
    }

    setHp(hp) {
        this.hp = hp;
    }

    getHp() {
        return this.hp;
    }
}