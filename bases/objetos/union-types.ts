(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVarible: string | number | Hero = 'Fernando';
  console.log(typeof myCustomVarible);

  myCustomVarible = 20;
  console.log(typeof myCustomVarible);

  myCustomVarible = {
    name: 'Bruce',
    age: 43,
    powers: [1],
  };

  console.log(typeof myCustomVarible);
  console.log(myCustomVarible);
})();
