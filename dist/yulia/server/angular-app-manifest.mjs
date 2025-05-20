
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
    'index.csr.html': {size: 25240, hash: 'd95dbad79d9de93fd0e4bb002a1b1c085dfd6c470e60dc4828e86bd11a9eef12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25024, hash: '0a902e88107689678e1637998ae81a7ba1feea48e49a33f74fd55a23f3566f5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30497, hash: 'bed594ea1ec633a04237e76e94f5f4e75c057597c9ac81f02095a019ef41effb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57314, hash: '73f41a9cb9506a1cd8325863b53823cbce592a3b17eba87bfd8a2943842558db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27403, hash: '97fcbc8c29069ea403f65d0178f5ed95c35594d41bda64379df8662464e9bb27', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};
