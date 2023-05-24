(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('InstanceName');
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // Constructor of class 'Apocalipsis' is private and only accessible within the class declaration.
  const errorInstance: Apocalipsis = new Apocalipsis('Gonzalo');

  const instance1 = Apocalipsis.callApocalipsis(); // {name: 'InstanceName'}
  const instance2 = Apocalipsis.callApocalipsis(); // {name: 'InstanceName'}
  const instance3 = Apocalipsis.callApocalipsis(); // {name: 'InstanceName'}

  instance1.changeName('newInstanceName');

  console.log(instance1); // {name: 'newInstanceName'}
  console.log(instance2); // {name: 'newInstanceName'}
  console.log(instance3); // {name: 'newInstanceName'}
})();
