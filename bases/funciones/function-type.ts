(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola, ${name}`;
  const saveTheWorld = (): string => 'El mundo está salvado';

  //* let myFunction: Function;
  let myFunction: (x: number, y: number) => number;

  // myFunction = addNumbers;
  // console.log(myFunction(1, 2));

  // myFunction = greet;
  // console.log(myFunction('Fernando'));

  // myFunction = saveTheWorld;
  // console.log(myFunction());
})();
