import React from "react";
import '../../style/read-more.css'
import articleContents from '../Contents/article-contents';
 



export const ReadMoreComponent =({})=>{
  


    return(<>
    
 <div class="container mt-5 mb-3">
    <div class="row">
    {articleContents.map((article,key)=>(
        <div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <img class="bx bxl-mailchimp"></img> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">{article.name}</h6> <span>1 days ago</span>
                        </div>
                    </div>
                    <div class="badge"> <span>Code</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">{article.title}</h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
</div>
                
    </>);

}


export default ReadMoreComponent;