"use strict";
(() => {
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        },
    };
    const villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log('Agregado de source-maps');
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
        Fuerza[Fuerza["Batman"] = 1] = "Batman";
        Fuerza[Fuerza["Flash"] = 5] = "Flash";
        Fuerza[Fuerza["Superman"] = 100] = "Superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.Flash;
    const fuerzaSuperman = Fuerza.Superman;
    const fuerzaBatman = Fuerza.Batman;
    const fuerzaAcuaman = Fuerza.Acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
noHaceNadaTampoco(1, 'uno', true, ['first item']);
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || ''}`.toUpperCase();
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola, ${name}`;
    const saveTheWorld = () => 'El mundo está salvado';
    let myFunction;
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
    };
})();
(() => {
    let myCustomVarible = 'Fernando';
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
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.236540454;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio!');
    console.log('Hola mundo');
})();
(() => {
    const foo = undefined;
    const qux = undefined;
})();
(() => {
    let avangers = 20;
    console.log(avangers);
    const villians = 20;
    if (avangers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avangers = Number('55A');
    console.log({ avangers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman} `);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return undefined;
    }
    const callSuperman = () => {
        return undefined;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map