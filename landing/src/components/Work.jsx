import React from 'react';
import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';

const Work = () => {
    const WorkInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ];

    return (
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How It Works</h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore autem dolores corporis magni tud.
                </p>
                <div className="work-section-bottom">
                    {WorkInfoData.map((data) => (
                        <div className="work-section-info" key={data.title}>
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
