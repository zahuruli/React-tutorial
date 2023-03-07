import React, { useEffect, useState } from 'react';
import { blogsData } from './Data/BlogsData';

import { useLocation, useParams } from 'react-router-dom';

const Blog = () => {
    const { title } = useParams();
    const [bodyData, setBodyData] = useState('');
    const location = useLocation();
    console.log(location);

    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // }, []);

    return (
        <div>
            <h1>{title}</h1>
            <p>{location.state.body}</p>
        </div>
    );
};

export default Blog;
