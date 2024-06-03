import { useState } from "react";

const User = ({name, location}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>{name}</h1>
            <p>From {location}</p>
            <p>Count: {count}</p>
            <button onClick={() => {
                setCount(
                    count + 1
                );
            }}>Increase</button>
        </div>
    );
};

export default User;
