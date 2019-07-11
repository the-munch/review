import React, { Component } from 'react';
import axios from 'axios';
import style from '../styles/style.css';

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        axios.get(`/reviews`)
            .then(res => {
                console.log(res.data);
                this.setState({reviews: res.data});
            })
            .catch(error => {
                console.log(error); 
            }) 
    }

    render() {
        return  (
            <div className={style.wrapper}>
                <ul className={style.review_list}>{ this.state.reviews.map(review => 
                <li className="review" key={review._id}><img src={review.picture}/> 
                    <div className={style.title}><h4>{review.name}</h4></div>
                    <div className={style.location}><h5>{review.location}</h5></div>
                </li>)}
            </ul>
            </div>
        )
    }
}

export default UserInfo;