import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundComponent from "./NotFoundComponent";
import articleContents from './Contents/article-contents';
import ReadMoreComponent from "./ArticleComponents/ReadMoreComponent";

 
export const ArticlesComponent =({match})=>{

    const {name} = useParams();

    const article=articleContents.find(article=>article.name===name)

    const [articleInfo,setArticleInfo] = useState({});


    if (!article) return <NotFoundComponent></NotFoundComponent>
    
    
    return( 
        <>
                <> 
                <div class="card mb-3">
                    <div className="col-md-7 p-0" >
                    <img style={{ float:'left', padding: '50px', borderRadius:'133px!important'}} src={article.imgPath} width={150} height={400} class="card-img-top" alt="..."></img>
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">{article.title}</h5>

                    <p class="card-text">{article.content}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <ReadMoreComponent></ReadMoreComponent>
                </div>
                </>
        
        
        </>
    );
  
}
export default ArticlesComponent; 