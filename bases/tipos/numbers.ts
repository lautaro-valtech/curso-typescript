(() => {
  let avangers: number = 20;

  console.log(avangers);

  const villians: number = 20;

  if (avangers < villians) {
    console.log('Estamos en problemas');
  } else {
    console.log('Nos salvamos');
  }

  avangers = Number('55A');

  console.log({ avangers });
})();
