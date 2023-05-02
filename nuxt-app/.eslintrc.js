module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}
