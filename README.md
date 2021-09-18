# atlas
网站类，如博客；基于 GatsbyJS

# Logs

## 20210918

### 创建基于 GatsbyJS 的第一个博客模版

[参考](https://www.gatsbyjs.cn/docs/quick-start)

> 需要指定 `gatsby-starter-hello-world` 代码库，否则，缺省条件创建的工程，可能会因为缺少无法安装的 `npm` 包而无法正常启动

```
npx gatsby new blog1 https://github.com/gatsbyjs/gatsby-starter-hello-world
```

### 运行开发模式

```
cd blog1
gatsby develop
```

> 执行 `yarn start` 也一样会执行 `gatsby develop`，可以参考 `package.json`

### 检查运行结果

> 浏览器打开：`http://localhost:8000`, `http://localhost:8000/___graphql`
