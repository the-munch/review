import React from 'react';
//unit test using jest and enzym
class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li>
                <div class="js-war-widget review review--with-sidebar" data-component-bound="true">
                    <div class="review-sidebar-content">
                        <div>
                            <div class class="media-avatar responsive-photo-box">

                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}