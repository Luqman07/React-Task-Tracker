import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
    
        const getData = async () => {
            try {
                const res = await fetch(url, { signal: abortCont.signal })
                // console.log(url);
                if (!res.ok) {
                    throw Error('Could not fetch data from that resource')
                }
                const data = await res.json()
                console.log(data)
                setData(data)
                setIsPending(false)
                setError(null)

            } catch (err) {
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted');
                } else{
                    setError(err.message)
                    setIsPending(false)
                }
            }
        };
        getData
        
        return ()=> abortCont.abort()

    }, [url]);

    return { error, isPending, data }
}

export default useFetch;