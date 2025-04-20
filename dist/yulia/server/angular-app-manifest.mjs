
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
    'index.csr.html': {size: 976, hash: '5dac6abed55530a8125b26b661837d3dc54509d911b5b4e259395a9615ba107a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '68f75aee14e019278be0dcc272fc3a55ee7b760f7cb9b5f9a8459c763c16fa53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22007, hash: '9fd32b37c668c8d9f155cdb677a9fde0e1c7bcf0a18ce3372768c8d8e527625d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 4838, hash: '377e3fdefc6346c269bf8609077634f41cc341024500e3c1388cf595f93e5fc0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-NAF7U7RL.css': {size: 3288, hash: 'tObkM63y1Es', text: () => import('./assets-chunks/styles-NAF7U7RL_css.mjs').then(m => m.default)}
  },
};
