import React, { Component } from 'react';
//unit test using jest and enzym

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/reviews/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            })
    }

    render() {

        let {isLoaded, items} = this.state;
        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <li>
                    <div class="js-war-widget review review--with-sidebar" data-component-bound="true">
                        <div class="review-sidebar-content">
                            <div>
                                <div class class="media-avatar responsive-photo-box">
                                    Data has been loaded
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            )
        }
    }
}

export default App;