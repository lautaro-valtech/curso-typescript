(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge(): string {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.team})!!!`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitán', 'Scott Lang');

  // console.log(antman);
  // console.log(Avenger.getAvgAge());
})();
