import React, { Component } from 'react';
import axios from 'axios';

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
                <li key={review._id}><img src={review.picture} height="60px" width="50px"/> 
                    <h4 className="user-name">{review.name}</h4>
                    <h5>{review.location}</h5>
                </li>)}
            </ul>
        )
    }
}

export default UserInfo;