import angular from 'angular';

class home {
  constructor() {

  }

  getIndicatorData() {
    this.indicators = [
      { name: "Abiemnon", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Abyei", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Akobo", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Akoka", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Anzara", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Aweil Centre", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Aweil East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Aweil North", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Aweil South", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Aweil West", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Awerial", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Ayod", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Bagari", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Bor", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Budi", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Cueibet", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Duk", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Ezo", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Fangak", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Gogrial East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Gogrial West", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Guit", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Ibba", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Ikotos", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Juba", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Jur River", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Kajo Keji", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Kapoeta East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Kapoeta North", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Kapoeta South", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Koch", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Kodok", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Lainya", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Leer", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Longuchuk", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Lopa/Lafon", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Maban", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Magwi", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Maiwut", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Malakal", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Manyo", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Maridi", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Mayendit", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Mayom", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Melut", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Morobo", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Mundri East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Mundri West", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Mvolo", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Nagero", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Nasir", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Nyirol", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Panrieng", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Panyijar", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Panyikang", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Pibor", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Pigi", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Pochalla", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Raga", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Renk", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Rubkona", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Rumbek Centre", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Rumbek East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Rumbek North", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Tambura", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Terekeka", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Tonj East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Tonj North", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Tonj South", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Torit", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Twic", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Twic East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Ulang", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Uror", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Wulu", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Yambio", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Yei", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Yirol East", service: "orange", outcomes: "orange", funding: "$ XXXX" },
      { name: "Yirol West", service: "orange", outcomes: "orange", funding: "$ XXXX" },
    ];
  }
}

export default angular.module('services.home', [])
  .service('home', home)
  .name;