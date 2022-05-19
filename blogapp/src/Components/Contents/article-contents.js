export const articles = [{
    
    name:'learn-react',
    title:'Popular framework React',
    content:[
        'Our latest major version includes out-of-the-box improvements like automatic batching, new APIs like startTransition, and streaming server-side rendering with support for Suspense.',
        'Many of the features in React 18 are built on top of our new concurrent renderer, a behind-the-scenes change that unlocks powerful new capabilities. Concurrent React is opt-in — it’s only enabled when you use a concurrent feature — but we think it will have a big impact on the way people build applications.',
        'We’ve spent years researching and developing support for concurrency in React, and we’ve taken extra care to provide a gradual adoption path for existing users. Last summer, we formed the React 18 Working Group to gather feedback from experts in the community and ensure a smooth upgrade experience for the entire React ecosystem.',
        'The most important addition in React 18 is something we hope you never have to think about: concurrency. We think this is largely true for application developers, though the story may be a bit more complicated for library maintainers.'
    ],
    imgPath:"https://www.ticimax.com/Uploads/images/saas--software-as-a-service-nedir-ornekleri-nelerdir-974783.jpg"
},
{
    
    name:'learn-node',
    title:'How can I learn node',
    content:[
        'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
        'This is in contrast to today','s more common concurrency model, in which OS threads are employed',' Thread-based networking is relatively inefficient and very difficult to use','Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks',
        'Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.'
    ],
    imgPath:"https://penrose.law/wp-content/uploads/Code.jpg"
},
{
    
    name:'learn-c++',
    title:'What is the C++',
    content:[
        'C++ (/ˌsiːˌplʌsˈplʌs/) is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
        'The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
        'It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.[10]',
        'C++ was designed with an orientation toward systems programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights.[11] C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[11] including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes).[12]'
    ],
    imgPath:"https://contentguidelines.jumia.ug/wp-content/uploads/sites/8/2019/09/computer-software-and-its-types-1024x683.jpg"
}
]

export default articles;