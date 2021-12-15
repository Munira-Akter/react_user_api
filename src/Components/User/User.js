import React, { Fragment , useState , useEffect } from 'react';
import Members from './Members';
import './User.css';

const User = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => data.json())
        .then((data) => setUser(data))
       
    }, []);

    return (
        <Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            user.map((data) => 

                                <Members user={data}/>
                            
                            )
                        }
                    </div>
                </div>
            </section>   
        </Fragment>
    )
}

export default User
