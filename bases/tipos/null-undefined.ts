(() => {
  const foo: undefined = undefined;
  const qux: number | undefined = undefined;

  //strickNullChecks
  //! Type 'null' is not assignable to type 'boolean'
  // const bar: boolean = null;
})();
