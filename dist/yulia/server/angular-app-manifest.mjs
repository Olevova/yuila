
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
    'index.csr.html': {size: 976, hash: '5f71c50144ece86c8512de0b7707302654deed0c4e7ab6b48a692739224f23e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'd4d4757b5f74c65dad5051d09c37b17c49fc3ba93f2dabfacc34b81472b96a36', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 4819, hash: '61545375795de48f3e7d81b12e6071a7ccb89f2e8567eb78e6576a133d500751', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22019, hash: 'e9b31c450bcde6086ca39829d086fd581c5634b6717b84be8b3ebccb2dc58a78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NAF7U7RL.css': {size: 3288, hash: 'tObkM63y1Es', text: () => import('./assets-chunks/styles-NAF7U7RL_css.mjs').then(m => m.default)}
  },
};
