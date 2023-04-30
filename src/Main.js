import React from 'react';
import XMLloader from './XML';


function Main(){
  return(
    <main className="Main">
      <XMLloader/>
    </main>
  );
}

export default Main;


 /* 
  xmlhttp.open('GET', url, true);
  xmlhttp.send();

  
  
const jsonDataFromXml = new XMLParser().parseFromString(xmlData.toString());

function Main({ posts }) {
  console.log(posts);
  return (
    <main>
      {posts.map((post, title) => (
        <div key={title}>
          <h2>{post.date}</h2>
          <h3>{post.author}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </main>
  );
}

export default Main;
*/