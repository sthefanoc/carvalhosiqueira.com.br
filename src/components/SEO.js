import React from 'react';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Component } from 'react';




// const SEO = ({title, description, keywords, image}) => {
class SEO extends Component{
    
    render(){
        const siteMetadata = {
            title: "CarvalhoSiqueira | Advogadas & Advogados",
            description:"Advogadas e advogados. Apoio jurídico estruturado a organizações, movimentos sociais e ativistas.",
            keywords:"carvalho, siqueira, carvalhosiqueira, flavio siqueira, sheila de carvalho, advogados, advogadas e advogados, escritorio advocacia",
            image:"/static/images/carvalhosiqueira-icon.webp",
            siteUrl:'https://carvalhosiqueira.com.br/',
        }
        // console.log(siteMetadata.title)

        // const {title, description, keywords, image} = this.props;
        const title = siteMetadata.title;
        const description = siteMetadata.description;
        const keywords = siteMetadata.keywords;
        const image = siteMetadata.image;
        const siteUrl = siteMetadata.siteUrl;

        console.log('title',title)
        console.log('description',description)
        console.log('keywords',keywords)
        console.log('image',image)


    return (
        <StaticQuery
            query={query}
            render={({
                site: {
                    siteMetadata: {
                        defaultTitle,
                        defaultDescription,
                        defaultImage,
                        url,
                        defaultKeywords
                    }
                }
            }) => {
                const seo = {
                    title: title || defaultTitle,
                    description: description || defaultDescription,
                    image: `${image ? image : url+defaultImage}`,
                    keywords: keywords || defaultKeywords
                }
                return (
                    <Helmet>
                        <title>{seo.title}</title>
                        <meta 
                            name="description" 
                            content={seo.description} />
                        <meta 
                            name="keywords" 
                            content={seo.keywords} />
                        <meta 
                            name="image" 
                            content={seo.image} />
                        <meta 
                            name="robots" 
                            content="index,follow" />
                        <html lang="pt" />
                        
                    </Helmet>
                )
            }}
        />
    )
}
}
export default SEO;

const query =graphql`
{
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl
        defaultKeywords: keywords
      }
    }
  }
`