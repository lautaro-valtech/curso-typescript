(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: number): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'SomeName',
    age: 25,
    address: {
      id: 1,
      zip: 'ZUD R6T',
      city: 'Ottawa',
    },
    getFullAddress(id: number): string {
      return `CITY: ${this.address.city} ZIP: ${this.address.zip}`;
    },
  };

  const otherClient: Client = {
    name: 'SomeName',
    age: 30,
    address: {
      id: 2,
      zip: 'K2S U2A',
      city: 'Toronto',
    },
    getFullAddress(id: number): string {
      return `CITY: ${this.address.city} ZIP: ${this.address.zip}`;
    },
  };
})();
