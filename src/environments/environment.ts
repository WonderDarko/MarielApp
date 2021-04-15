// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    api: 'https://pokeapi.co/api/v2/',
    pokemon: {
      id: 'pokemon/_id_',
      name: 'pokemon/_name_'
    },
    type: {
      id: 'type/_id_'
    },
    ability: {
      id: 'ability/_id_'
    }
  },

  endpointSW: {
    api: 'https://swapi.dev/api/',
    person: {
      id: 'people/_id_/',
    }
  },

  firebaseConfig: {
    apiKey: "AIzaSyDtgJMEBKEwrgq7sgCw8_GtmUyBmhWpErw",
    authDomain: "ioniciotnodemcu-437b7.firebaseapp.com",
    databaseURL: "https://ioniciotnodemcu-437b7-default-rtdb.firebaseio.com",
    projectId: "ioniciotnodemcu-437b7",
    storageBucket: "ioniciotnodemcu-437b7.appspot.com",
    messagingSenderId: "673668083930",
    appId: "1:673668083930:web:86d347cab676d9c283b5e3",
    measurementId: "G-WKDN21R9CW"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
