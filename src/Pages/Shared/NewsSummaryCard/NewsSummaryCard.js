import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';


const NewsSummaryCard = ({news}) => {
    const {_id, title, details, author, image_url, rating,total_view} = news;
    // console.log(news)
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image className='me-3'
                        roundedCircle
                        src={author.img}
                        style={{height: '60px'}}
                    ></Image>
                    <div>
                        <p className='m-0 p-0'><small>{author.name}</small></p>
                        <p className='m-0 p-0'><small>{author.published_date}</small></p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-4' variant="top" src={image_url} />
                <Card.Text>
                {
                    details.length > 250 ?
                    <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
                    :
                    <>{details}</>
                }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <div>
                    <FaStar className='me-3 text-warning'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-3'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;