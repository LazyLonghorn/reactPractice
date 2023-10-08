import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { styled } from 'styled-components';
import axios from 'axios';
import usePromise from 'src/lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;        
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=882f462a67c647daa5c2efa09ffa8027`);
    }, [category]);




    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);

    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=882f462a67c647daa5c2efa09ffa8027`);
    //             setArticles(res.data.articles);

    //         } catch(e) {
    //             console.log(e);
    //         }

    //         setLoading(false);
    //     }

    //     fetchData();
    // }, [category]);

    if(loading) {
        return <NewsListBlock>Loading ...</NewsListBlock>
    }

    // 아직 articles 이 설정되지 않았을 때
    if(!response) {
        return null;
    }

    if(error) {
       return <NewsListBlock>Error!</NewsListBlock>
    }


    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;