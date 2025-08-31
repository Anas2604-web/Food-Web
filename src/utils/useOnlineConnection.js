import { useEffect, useState } from "react"

const useOnlineConnection = () => {
    
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => { 
        if(!navigator.onLine) {
            setIsOnline(false);
        }


    },    [])

    window.addEventListener("online",()=> {
        setIsOnline(true);
    })

    window.addEventListener("offline",()=> {
        setIsOnline(false);
    })

    return isOnline;
}

export default useOnlineConnection;