
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
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25240, hash: '66b70787e246d6a491fcd8ee65b31e361d8f5d6ed74549fe40cfec6a84ba8101', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25024, hash: '2727c5ff7359c544e1136a3f6ea430a3f5cdb61d321ba7f8d0a8ad6afd9a0822', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57201, hash: '0258b742c36be7dbd0320d16c8dd0aff14390839218c0465d2d821bcf8375ade', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30253, hash: '433b287c47b359cbaccdfcd23fdd5e9d4acc5c7e1edf9158a71cca9c45ee4293', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-C3DG3VK7.css': {size: 3814, hash: 'eG7V8zcvhWU', text: () => import('./assets-chunks/styles-C3DG3VK7_css.mjs').then(m => m.default)}
  },
};
