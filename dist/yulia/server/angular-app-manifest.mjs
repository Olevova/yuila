
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
    'index.csr.html': {size: 25268, hash: '216885264ce8ce0423188621aae6a40dd6292657fe2bb888b8ebfac975733ac1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25052, hash: 'd16969eb70b9253ad814ec14cdbe8f4f17479eb7943236849bd01af946831e7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57954, hash: 'bc6a511d64a5118c500300401a4e63451b16bfeb4f06c9b00e6915ac4f5071b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30525, hash: '8c793e39bb28e48d531298acc9ae7ce682cc3e37a8016ac05281b931312f4538', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'agreement/index.html': {size: 43710, hash: '11c64139747dd9ab4271d9750233fed7ddf47aad50e4093a68b9b6cfacd943bd', text: () => import('./assets-chunks/agreement_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 27431, hash: 'df7b085375cebd01ec099735b0c8262d4f04ad7dfdd65aad26881c61655f515d', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'styles-UX6A6DT3.css': {size: 3861, hash: 'kT7FUXhp9LI', text: () => import('./assets-chunks/styles-UX6A6DT3_css.mjs').then(m => m.default)}
  },
};
