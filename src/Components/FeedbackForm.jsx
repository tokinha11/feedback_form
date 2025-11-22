import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const initialFormState = {
    name: '',
    email: '',
    feedback: '',
    rating: ''
};

const FeedbackForm = () => {
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.feedback || !formData.rating) {
            alert('Please complete all fields and select a rating.');
            return;
        }
        const confirmationMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Feedback: ${formData.feedback}
            Rating: ${formData.rating}
        `;
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Sending your feedback', formData);
            setFormData(initialFormState);
            alert('Thanks for your feedback!');
        }
    };

    return (
        <>
            <nav>
                Tell Us What You Think
            </nav>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>We'd Love to Hear From You!</h2>
                <p>Please share your feedback with us.</p>
                <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name='feedback'
                    placeholder='Your Feedback'
                    value={formData.feedback}
                    onChange={handleChange}
                />
                <div style={{display:'flex', gap:'10px', flexDirection:'row'}}>
                    <span>Rate Us:</span>
                    <p>
                        <input
                            type='radio'
                            name='rating'
                            value='1'
                            checked={formData.rating === '1'}
                            onChange={handleChange}
                        /> 1
                    </p>
                    <p>
                        <input
                            type='radio'
                            name='rating'
                            value='2'
                            checked={formData.rating === '2'}
                            onChange={handleChange}
                        /> 2
                    </p>
                    <p>
                        <input
                            type='radio'
                            name='rating'
                            value='3'
                            checked={formData.rating === '3'}
                            onChange={handleChange}
                        /> 3
                    </p>
                    <p>
                        <input
                            type='radio'
                            name='rating'
                            value='4'
                            checked={formData.rating === '4'}
                            onChange={handleChange}
                        /> 4
                    </p>
                    <p>
                        <input
                            type='radio'
                            name='rating'
                            value='5'
                            checked={formData.rating === '5'}
                            onChange={handleChange}
                        /> 5
                    </p>
                </div>
                <button type='submit'>Submit your feedback</button>  
            </form>
        </>
    );
};

export default FeedbackForm;
