// import './Posts.css';
import React from 'react';
import axios from 'axios';
import  {useEffect, useState} from 'react';


export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((reponse) => setPosts(reponse.data));
    },[]);
    

    
    return (
        <div className='posts'>
            <h1>Posts de Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}