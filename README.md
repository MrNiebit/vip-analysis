# mgtv-player

## 仅限学习使用

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 播放器请求路径

[https://mrniebit.github.io/vip-analysis/#/play?url=xxx](https://mrniebit.github.io/vip-analysis/#/play?url=xxx)

## 部署问题

```js
        publicPath: process.env.NODE_ENV === 'production' ? '/vip-analysis' : '/',
```

路由的base

```js
    base: '/vip-analysis'
```

request.js

```js
        baseURL: '/vip-analysis',
```
