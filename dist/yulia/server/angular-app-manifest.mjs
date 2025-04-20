
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
    'index.csr.html': {size: 976, hash: 'f71865de0609b6b701eaa4ac136d76f5145dde41b6dbe3c0d47d0ba119985158', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '7ee1a9624d4b464dc47b3ca2a3b23eab53ff4ad5cad5e557c689a6e271a84e35', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22007, hash: '19f6e703864ecfbd8103b510c0a112ddb00c55868d75c17a49649e3569e2170c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 4765, hash: '99189a5bf95d83d4982eaef56e60e4f166a4a9ead9b76b510f7c187b37ef91b8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-NAF7U7RL.css': {size: 3288, hash: 'tObkM63y1Es', text: () => import('./assets-chunks/styles-NAF7U7RL_css.mjs').then(m => m.default)}
  },
};
