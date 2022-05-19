
import React from "react";
import { Link } from "react-router-dom";
import articleContents from '../Contents/article-contents';
import '../../style/article-list.css'

export const BlogPart = () => 
{
    return (
                <>
                {articleContents.map((article,key)=>(
                    <>
                        <div class="vtimeline-point">
                                <div class="vtimeline-icon">
                                    <i class="fa fa-image"></i>
                                </div>
                                
                            <div class="vtimeline-block">
                                    <span class="vtimeline-date">June 25, 2020</span>
                                    <div class="vtimeline-content">
                                    <a href="#"><img src={article.imgPath} alt="" class="img-fluid mb20"></img></a>
                                        <a href="#"><h3>{article.title}</h3></a>
                                        <ul class="post-meta list-inline">
                                            <li class="list-inline-item">
                                                <i class="fa fa-user-circle-o"></i> <a href="https://github.com/UfukBlbn">Author</a>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fa fa-calendar-o"></i> <a href="#">25 June 2020</a>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fa fa-tags"></i> <a href="#">ReactEveryTime</a>
                                            </li>
                                        </ul>
                                        <p>
                                        {article.content[0].substring(0,100)}...
                                        </p>
                                        <Link to={article.name} class="btn btn-outline-secondary btn-sm">Read More</Link>    
                                        </div>
                                </div>
                                </div>

                    </>
                  ))}
                </>
           
    );
} 



export default BlogPart;