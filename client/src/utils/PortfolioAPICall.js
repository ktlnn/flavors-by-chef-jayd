import { useState, useEffect } from 'react';
import API from "./API";

const useAllPortfolioImgs = function () {

    const [showPortfolioImgs, setShowPortfolioImgs] = useState([]);

    useEffect(() => {
        API.getPortfolioImgs()
            .then(portfolio => {
                console.log(portfolio);
                setShowPortfolioImgs(portfolio.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return [showPortfolioImgs];
}
export { useAllPortfolioImgs };