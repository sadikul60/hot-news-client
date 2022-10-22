import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import {  FaRegBookmark, FaShareAlt,  } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, details, author, image_url, } = news;
    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image className='me-3'
                        roundedCircle
                        src={author?.img}
                        style={{height: '60px'}}
                    ></Image>
                    <div>
                        <p className='m-0 p-0'><small>{author?.name}</small></p>
                        <p className='m-0 p-0'><small>{author?.published_date}</small></p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-3'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-4' variant="top" src={image_url} />
                <Card.Text>
                    <p>{details}</p>

                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button className='w-100 mx-auto' variant="primary">Go to Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;