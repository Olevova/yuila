
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
    'index.csr.html': {size: 25214, hash: 'f5fe75db6ec2d421bddfccf72032e371d23ecb603c1f04047383fbf6f4c2bd5b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25023, hash: 'a75c47404eaba23bd33f8ec45e30d76ada35352c4019106f69258e74b69b3e87', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30554, hash: '0ea6431d38211108fa9a036af865ac0131e3882a974afbe114f21949c06583a3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 72435, hash: '4137f15d6c6edf04464e0961a566c3e73de69fa7ba9036478c9ab531e0e438a3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PFUNF4HQ.css': {size: 3788, hash: 'GwviV287M+E', text: () => import('./assets-chunks/styles-PFUNF4HQ_css.mjs').then(m => m.default)}
  },
};
