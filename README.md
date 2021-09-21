# atlas
网站类，如博客；基于 GatsbyJS

# Logs

## 20210921

### 添加 siteMetadata

- `gatsby-config.js`

```
const siteMetadata = { ... };

module.exports = {
  
  siteMetadata,
 
  ...

}
```

- `http://localhost:8000/___graphql`

```
query MyQuery {
  site(siteMetadata: {}) {
    siteMetadata {
      title
      description
      author
      copyright
      contact {
        email
        phone
      }
    }
  }
}
```

### 添加 `Sourcing Data` `gatsby-source-filesystem`

- CLI

```
yarn add gatsby-source-filesystem
```

- 增加和 `src` 目录平级的 `seeds` 目录，并创建一个 `markdown` 文件

- `gatsby-config.js`

```
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'setting',
        path: `${__dirname}/seeds`,
      }
    },

    ...

  ],

```

- `http://localhost:8000/___graphql`

```
query MyQuery {
  allFile {
    nodes {
      size
      root
      sourceInstanceName
      name
      absolutePath
      dir
      ext
    }
  }
}
```

### 添加 `Sourcing Data` `gatsby-source-git`

- CLI

```
yarn add gatsby-source-git
```

- `gatsby-config.js`

```
  plugins: [
    
    ...

    {
      resolve: `gatsby-source-git`,
      options: {
        name: `repo-notebook`,
        remote: `https://github.com/we-ready/notebook.git`,
        branch: `master`,
        patterns: [`**/*.md`],
      }
    },

    ...

  ],

```

- `http://localhost:8000/___graphql`

```
query MyQuery {
  allFile {
    nodes {
      size
      sourceInstanceName
      name
      absolutePath
      ext
    }
  }
}
```

### 添加 `transformer`

- CLI

```
yarn add gatsby-transformer-excel gatsby-transformer-remark gatsby-transformer-yaml
```

- `gatsby-config.js`

```
  plugins: [
    
    ...

    'gatsby-transformer-yaml',
    'gatsby-transformer-excel',
    'gatsby-transformer-remark',
  ]
```

- 在 `seeds` 目录中创建 `yaml` 文件和 `exlx` 文件

> `excel` 的第一行，需要填写英文，否则 `transformer` 将无法识别

- `http://localhost:8000/___graphql`

```
query MyQuery {
  allMarkdownRemark {
    nodes {
      html
      fileAbsolutePath
      frontmatter {
        author
        category
        cover
        id
        created_when(formatString: "YYYY-MM-DD")
      }
    }
  }
}
```

```
query MyQuery {
  allSeedsYaml {
    nodes {
      data {
        category
        title
        tree_path
        serial_code
      }
    }
  }
}
```

```
query MyQuery {
  allDebuggingXlsxSheet1 {
    nodes {
      age
      name
      id
    }
  }
}
```

### `styled-components`

- CLI

```
yarn add styled-components gatsby-plugin-styled-components babel-plugin-styled-components
```

- `gatsby-config.js`

```
module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',

    ...
  ],
}
```

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
