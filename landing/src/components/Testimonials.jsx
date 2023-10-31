import ProfilePic from '../assets/john-doe-image.png';
import {AiFillStar} from 'react-icons/ai';

const Testimonials = () => {
    return (
        <div className='work-section-wrapper' id='Testimonials'>
            <div className="work-section-top">
                <p className='primary-subheading'>Testimonial</p>
                <h1 className='primary-heading'>What They Are Saying</h1>
                <p className='primary-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi neque doloremque tempore consequuntur esse enim quia blanditiis.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate quibusdam placeat provident, voluptate quasi delenit!</p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>Johh Doe</h2>
            </div>
        </div>
    )
}

export default Testimonials
