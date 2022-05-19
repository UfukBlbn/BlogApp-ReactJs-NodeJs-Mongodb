import React from "react";

export const MainComponent =()=>{
    return(
        <>
              <main role="main">
                    <div class="jumbotron">
                        <div class="col-sm-8 mx-auto" style={{textAlign:'center'}}>
                            <h1 >Welcome to my Blog</h1>
                                <img width={250} height={250} src="https://www.pngkey.com/png/full/222-2224685_react-logo-png-transparent-react-logo.png"></img>
                                <p>React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a <code>language</code>, it is widely used in web development  React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.</p>
                                <p>The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.</p>
                                <p>
                                <a class="btn btn-success" href="../../components/navbar/" role="button">Start Reading »</a>
                                </p>
                        </div>
                    </div>
                </main>
        </>
    );
}

export default MainComponent;