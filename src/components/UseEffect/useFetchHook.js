import React, { useEffect, useState } from 'react';

const useFetchHook = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Fatching is Not Successful');
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 500);
    }, [url]);

    return { isLoading, data, error };
};

export default useFetchHook;
