
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
    'index.csr.html': {size: 25269, hash: 'acd00de59bc931b58440586a9d07e959872d90dbece05841de307d8843bc2c4b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25053, hash: 'f3a3d3140692c0c84e8e146d5deb2cf891ba301e714a105c101faf0040e3dddb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30526, hash: '83c2ec220a043b732bd91334f10e5add8037ae0fa1bfee4913606092b9d0502c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43711, hash: '0c0fc24dfa6a83ddf45cf4e0e7aea597b4e99f2d7918164f383846ecf29f3bec', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27432, hash: '7c87f86339f72798a61d2278001219a98c451bd747f025581c800ad236d130b5', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57955, hash: '13f5b68bd453ecc983f53ca414b02a566cb87ace51f5b7e826a03bd0e355a8fd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};
