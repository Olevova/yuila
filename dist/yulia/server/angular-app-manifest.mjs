
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
    'index.csr.html': {size: 25239, hash: '82f94fce3a31e0121d920a1f59925a7fce062bf452d03caddd9ead72040a323b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25023, hash: 'fa3f0668cfb1448bc3eb8ba30b8dccd9b628fca75f1dab9972126b5d99adb557', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57201, hash: '156e9b79a462ee59054c775ce5909e1f821992e4858bd3811fa3880017481810', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30253, hash: 'af610d4af6ba4b69dd3680dd922be667f0ecaf6024528e70ad4ecc2b61e794d1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-C3DG3VK7.css': {size: 3814, hash: 'eG7V8zcvhWU', text: () => import('./assets-chunks/styles-C3DG3VK7_css.mjs').then(m => m.default)}
  },
};
