
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
    'index.csr.html': {size: 25269, hash: '3fc053e382dd640b68f7ad8c8f7c99449bfa020902e66ba5bd59f81b104ad1b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25053, hash: 'c32126d3483623b4060031ed256ee3881951261691eaecb1400100c2a14d7a6f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57955, hash: '0eb7bca83bf05c9e9863ca34f1ecbd1d329d832e5dc922ba0a28496e127f6920', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30526, hash: '8ac0bdbd567538a06913f773362aa13a3e4047f292b7bf2d4db842717913bdee', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43711, hash: '3078004a2f5d47c6aae0304966852c2bce7ce152f2948d9adb6ba0a9ee9b4e33', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27432, hash: '0eb4d78f9377148044b0f9c2adaa3391dce30d65731f03c5242f05fe63cec6b2', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};
