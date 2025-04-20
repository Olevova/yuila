
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
    'index.csr.html': {size: 976, hash: '1e34c5d2e41fa3d4712a5cd82b54c2b79a5e367881fa1537bc3d1b4b85677e3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '270272df13dfa6347bc1e0315a2106407fe0824cdc173ababc39f960464f0f7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22007, hash: '97fb8c52a65db53ae30a0d65d84964dab9b40df78ec3bb26f8fd3c07ede52ec2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 1623, hash: '3db4c82e4d265db85874bf2d0c43d288d847276b73eb2f3fd63aee9b5facf156', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-NAF7U7RL.css': {size: 3288, hash: 'tObkM63y1Es', text: () => import('./assets-chunks/styles-NAF7U7RL_css.mjs').then(m => m.default)}
  },
};
