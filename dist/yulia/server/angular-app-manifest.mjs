
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
    'index.csr.html': {size: 25269, hash: 'b11f8188ca3b3aca3a66c097e7bca327d21f362edb5372afa4da25e66bdc3581', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25053, hash: 'a1508ddf202d373240004f8137588c50246db9d110d66216d97cece86cf47c80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30526, hash: 'e92bbb20d871e43c6339950ba0891221c8eadceb46103acee4c0fac04ba96e9f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'payment-success/index.html': {size: 30505, hash: '27a118d449e9f11dc87006fc8065142eb8f22e873e3622d0c87d9746d2bef795', text: () => import('./assets-chunks/payment-success_index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43718, hash: '419116b6863ed7eacd901f28c556962a2c2ceac43a0f809578b3875a89887de1', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27432, hash: 'b1c650bf6609137c070f0854f59f1a74372e17c7a534c67f7d10ee98412b48e4', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57981, hash: 'e1ccb83b99f40ce1c9559b270a43acc5175b5855f83580349e3bef11c2c31b0a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};
