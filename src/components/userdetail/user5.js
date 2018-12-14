import React, { Component } from 'react';

class User5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    dataUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/5`)
            .then(response => response.json())
            .then(json => this.setState({
                user: json
            })
            )
    }

    componentDidMount() {
        this.dataUser()
    }

    render() {
        const {user} = this.state
        if (user) {
            return (
                <div>
                        <div>{user.username}</div>
                            <div className="modal-container">
                                <div className="modal-detail-user">
                                    <p><i class="fas fa-user"></i></p>
                                    <p><i class="fas fa-at"></i></p>
                                    <p><i class="fas fa-phone"></i> </p>
                                </div>
                                <div className="modal-detail2-user">
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>
                                </div>
                            </div>
                </div>
            )

        }
        else {
            return <div>Loading</div>
        }
    }
}

export default User5;