# React + TypeScript + Vite

Этот проект подразумевает собой персональный сайт-одностраничник, где представляются товары (авторские ножи), можно добавить в избранное и заказать.
Цель данного проекта было использовать и протестировать технологию Redux-toolkit и RTK-query, для возможности хранить избранные товары.
В дальнейшем хочу изменить дизайн на более красивый и внедритить систему оплаты выбранного товара.

![ScreenShot](https://github.com/zorro199/Knife-master-react.js-/blob/main/public/knife1.png)
![ScreenShot](https://github.com/zorro199/Knife-master-react-js-/blob/main/public/knife2.png)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
