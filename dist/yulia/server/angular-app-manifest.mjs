
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
    'index.csr.html': {size: 25268, hash: '9958e765fa2362a5cb931fc8c8bb109d2407a8f17ce556d91f3b77dd8aac47f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25052, hash: 'eed3e229adc6400a80b51d42853c01e9b7ad8a0601f6eec04be8f74a5ce522f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30525, hash: '8f6f95a96d5323358f0a307fa61b80d06825d92efe3e4f59a039d36f19c651ab', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57954, hash: 'ce1803d55640d19da479cedefb4f5e3ceea104ea440af13d27fd5430946b9dce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43710, hash: '7b174ed998f0679a86a83d1c71eb801c0f888f6fe16a8474c72b5cae311d1659', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27431, hash: '515f16ebca25c76097fcfc101ca47c2a3a95742e4ddb228a8c1dbf89d7e6d127', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};
