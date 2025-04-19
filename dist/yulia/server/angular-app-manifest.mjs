
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 976, hash: 'ec153d01e2d2cf2c4374e175bf3e0aaa745802c015956448d49c056a63d5fd64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '16145d3dd11eb2c942225539d26d1a856af9cf501d3aa65980c3ad2c0d1b400c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21251, hash: '3383faba7857da52de2fef0f0c953b5decb870808e72d6e2074ae78a177262cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NAF7U7RL.css': {size: 3288, hash: 'tObkM63y1Es', text: () => import('./assets-chunks/styles-NAF7U7RL_css.mjs').then(m => m.default)}
  },
};
