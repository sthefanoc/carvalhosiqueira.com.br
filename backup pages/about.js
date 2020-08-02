import React,  { Component } from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
// import SkillsChart from '../components/SkillsChart'
// import { Link, navigate, withPrefix } from 'gatsby';

class About extends Component {
  
  render(){

    // const { data } = this.props;
    
    return(
      <PrimaryLayout>
        <h1>Sobre nós</h1>
        <div>This is an awesome about page</div>

      </PrimaryLayout>
    )
  }
}

export default About;


// export const query = graphql`
// {
//     allWordpressWpCertificateItem{
//       nodes{
//         short_name
//         title
//         content
//         excerpt
//         featured_media{
//           localFile{
//             childImageSharp{
//               fixed(width:300, height: 300){
//                 src
//                 width
//                 height
//                 originalName
//               }
//             }
//           }
//         }
//         teaching_institution
//         course_link
//         blog_post
//         certificate_link
//         course_completion
//         course_duration
//         is_priority_course
//         featured_media{
//           localFile{
//             childImageSharp{
//               fixed(width:300, height: 300){
//                 src
//                 width
//                 height
//                 originalName
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `