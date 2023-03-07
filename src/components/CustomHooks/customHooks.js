import React, { useEffect, useState } from 'react';

const CustomHooks = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [datas, setDatas] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Can not fetch Data');
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setDatas(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 500);
    }, [url]);

    return { isLoading, datas, error };
};

export default CustomHooks;
