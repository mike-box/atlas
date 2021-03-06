/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = {
  title: 'WeReady',
  author: 'Chris Wei',
  description: '基于Nodejs的全栈开发，基于Docker、K8S的DevOps。涉及的技术栈包括：HTML、CSS、Nodejs、NPM、Reactjs、Ant Design、Material UI、Styled Components、Nestjs、Knex、PostgreSQL、Redis、RabbitMQ，等等；使用的工具包括：git、VMWare、XShell、Postman、Figma、LENS，等等。',
  jumbotron: 'http://qiniuargus.weready.online/blog/coding_man.png',

  copyright: '© 2021 WeReady. All rights reserved.',
  contact: {
    phone: '18621569380',
    email: 'yunzhi.wei@qq.com',
  },
}

module.exports = {
  
  siteMetadata,

  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'setting',
        path: `${__dirname}/seeds`,
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `repo-notebook`,
        remote: `https://github.com/we-ready/notebook.git`,
        branch: `master`,
        patterns: [`**/*.md`],
      }
    },

    'gatsby-transformer-yaml',
    'gatsby-transformer-excel',
    'gatsby-transformer-remark',

  ],

}
