
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
    'index.csr.html': {size: 976, hash: '5d301f026b6f7c3384aa5b36b9d74050d502da48286fadd5f2b45608d24d418b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '38ed9b41d1e6245511ea34645cc2bc6c18683665008fc118f8e4df5d80c25055', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22007, hash: '0988a65bafda540dcaa1332f0a48ad9681cafeee914429a09e415d81bd9f3d8e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 4765, hash: '022b4690c78333726af15affe07d2ad17d5566d848b16f3cc6006600dad7d2f1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-NAF7U7RL.css': {size: 3288, hash: 'tObkM63y1Es', text: () => import('./assets-chunks/styles-NAF7U7RL_css.mjs').then(m => m.default)}
  },
};
