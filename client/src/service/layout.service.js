import MobileSerice from './mobile.service';
import WebService from './web.service';
import React, { useEffect, useState } from "react";


function LayoutService() {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    if (width <= 768) {
        return (
            <WebService />
        )
    } else {
        return (
            <WebService />
        )
    }
}

export default LayoutService;