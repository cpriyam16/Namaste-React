import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>{name}</h1>
                <p>From {location}</p>
                <p>Count: {count}</p>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    });
                }}>Increase</button>
            </div>
        );
    }
}

export default UserClass;