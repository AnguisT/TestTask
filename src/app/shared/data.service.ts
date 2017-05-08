import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countrys= [
      {
        id: 1,
        title: "Russia",
        population: 146804372,
        area: 17125191,
        language: "Russian",
        capital: "Mosсow",
        valuyuta: "Ruble"
      },
      {
        id: 2,
        title: "Russia",
        population: 146804372,
        area: 17125191,
        language: "Russian",
        capital: "Mosсow",
        valuyuta: "Ruble"
      },
      {
        id: 3,
        title: "Russia",
        population: 146804372,
        area: 17125191,
        language: "Russian",
        capital: "Mosсow",
        valuyuta: "Ruble"
      },

    ];

    return { countrys };
  }
}
