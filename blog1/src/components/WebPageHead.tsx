import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const WebPageHead = ({context}) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return(
    <Helmet >
      <title>
      {
        (!context?.title) ? 
        data.site.siteMetadata.title
        :
        `${data.site.siteMetadata.title} | ${context.title}`
      }
      </title>

      { !!context?.keywords && <meta name='keywords'            content={context.keywords} /> }
      { !!context?.category && <meta property='wr:type'         content={context.category} /> }
      { !!context?.title    && <meta property='wr:title'        content={context.title} /> }
      { !!context?.subtitle && <meta property='wr:description'  content={context.description} /> }

      {/* 
      { !!context?.? && <meta property='wr:image'       content={context.} /> }
      { !!context?.? && <meta property='wr:locale'      content={context.} /> }
      { !!context?.? && <meta property='wr:url'         content={context.} /> } 
      */}
      {/* <link rel='canonical'           content='' /> */}
    }
    </Helmet>
  )

}
