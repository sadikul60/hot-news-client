import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h3>This Category has news: {categoryNews.length}</h3>
            
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;