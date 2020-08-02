import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
// import { withPrefix } from "gatsby";
import { Component } from "react";

class Project extends Component {
  
  render() {

  return (
    <PrimaryLayout>
      <h1>Casos</h1>
      <div>Awesome cases page!</div>
    </PrimaryLayout>
  )}
};

export default Project;

// export const query = graphql`
// {
//   allWordpressWpPortfolioItem{
//     nodes{
//       title
//       short_name
//       content
//       featured_media{
//           localFile{
//             childImageSharp{
//               fixed(width:800, height: 800){
//                 src
//                 width
//                 height
//                 originalName
//               }
//             }
//           }
//         }
//       programming_category
//       main_language
//       libraries_used
//       frameworks_used
//       blog_post
//       github_repo
//       live_project
//     }
//   }
// }
// `