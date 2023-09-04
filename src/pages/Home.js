import React, { useEffect, useState } from "react";
import axios from "axios";
const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        client.get('?_limit=10').then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div className="app">
            <h2>All Posts 📫</h2>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                        <div className="button">
                            <div className="delete-btn">Delete</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;