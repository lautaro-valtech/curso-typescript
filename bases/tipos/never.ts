(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error('Auxilio!');

  // this value is never read
  console.log('Hola mundo');
})();
