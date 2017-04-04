// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAMU_mZfq-B7nAawngQ0eglwSO7NK3rSsQ",
    authDomain: "zhangl-quick-chat.firebaseapp.com",
    databaseURL: "https://zhangl-quick-chat.firebaseio.com",
    projectId: "zhangl-quick-chat",
    storageBucket: "zhangl-quick-chat.appspot.com",
    messagingSenderId: "171706663729"
  }
};
