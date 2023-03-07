import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style/Blogs.css';
import { blogsData } from './Data/BlogsData';
import { Link } from 'react-router-dom';
const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);

    const truncetString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + ' ...';
        } else {
            return str;
        }
    };

    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
                {blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return (
                        <article key={uuidv4()}>
                            <h3>{title}</h3>
                            <p>{truncetString(body, 50)}</p>
                            <Link to={title} state={{ id, title, body }}>
                                Learn More
                            </Link>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Blogs;
