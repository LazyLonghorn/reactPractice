import React from 'react';
import Categories from 'src/components/Categories';
import NewsList from 'src/components/NewsList';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
    const { category } = useParams();
    
    return (
        <>
            <Categories category={(category) ? category : 'all'}/>
            <NewsList category={(category) ? category : 'all'} />
        </>
    );
};

export default NewsPage;