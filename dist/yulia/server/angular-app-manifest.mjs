
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/agreement"
  },
  {
    "renderMode": 2,
    "route": "/payment-success"
  },
  {
    "renderMode": 2,
    "route": "/404"
  },
  {
    "renderMode": 2,
    "redirectTo": "/404",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25269, hash: 'c9c9d7a7980a146e1b50007b5c3c9849d32e3e838cd9f0ff6acd02fd1de5f597', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25053, hash: 'c7d2ad3193585bb733f9ad5a0a03b4820b27fc1f201d9205142553f675edae45', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30526, hash: 'bf13070d48281f57bace85ba64e0ee6696bb26465cc91e27bf5129217d489608', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43718, hash: 'dac480ad4b5038c5c89316be6b68179c781d1345c40a3c99c470c910a00c1411', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27432, hash: 'f33bf2a7cf6dd537a581caef0136a9df514381fed5f6ed59f3c2d7507df98de7', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57981, hash: '29c03344db2e1da6c9a8be8b77ca6bdd99653a4efb5db56e135b0ab21dc43e13', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'payment-success/index.html': {size: 30505, hash: '1b59a37ecb46d9afaa3afcf1a843b2aa838d340ad019583e77454171a79abfb1', text: () => import('./assets-chunks/payment-success_index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};
