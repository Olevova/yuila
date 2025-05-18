
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25217, hash: 'ff5d0b98240513e16c04f449aedd46da7499bdf449e2d02e7b5314c5d54be506', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25026, hash: 'c6c2960d11d08d1ec645364fa0927e313dca73c42c1530ca2af9b6438749a557', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72438, hash: '4e3322061928dc9d4225049b422b9852423859a29f4cebb9a9ed5d4820cabb02', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30511, hash: '13d6ea3428dc9237cd27f781c34ad6042b59449144aa2e20d777f76bfa6753bf', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-PFUNF4HQ.css': {size: 3788, hash: 'GwviV287M+E', text: () => import('./assets-chunks/styles-PFUNF4HQ_css.mjs').then(m => m.default)}
  },
};
