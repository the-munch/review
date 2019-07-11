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
            <ul>{ this.state.reviews.map(review => 
                <li className={style.review} key={review._id}><img src={review.picture} height="60px" width="60px"/> 
                    <h4 className={style.title}>{review.name}</h4>
                    <h5>{review.location}</h5>
                </li>)}
            </ul>
        )
    }
}

export default UserInfo;