
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
    'index.csr.html': {size: 25239, hash: 'daae3a4a1dfaaa8f2987d0a23189a329b07260d242f106fbcc9ac41e5ce87e8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25023, hash: '70f7d102c10bda97b40628ead2df661d345e6c780deb78d88e5be351f8a90909', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 31440, hash: '12a1e1f33f214177069be319285350d87c57654fcf150663a34755e2f2351356', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 72461, hash: '682a9c0372e390b589d60c3e800c2b806a81f96968dcdc6222397d58669b8f6b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-C3DG3VK7.css': {size: 3814, hash: 'eG7V8zcvhWU', text: () => import('./assets-chunks/styles-C3DG3VK7_css.mjs').then(m => m.default)}
  },
};
