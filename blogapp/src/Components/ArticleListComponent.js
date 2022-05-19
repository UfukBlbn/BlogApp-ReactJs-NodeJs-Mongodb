import React from "react";
import articleContents from './Contents/article-contents';
import BlogsPart from './ArticleComponents/BlogsPart';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/article-list.css'

export const ArticleListComponent = () => 
{
    return (
        <>
           <div class="container mb80">
            <div class="page-timeline">
                    <BlogsPart></BlogsPart>
                </div>
            </div>
   

        </>
    );
} 

export default ArticleListComponent;