import React, { Fragment } from 'react';
import './Members.css';


const Members = (data) => {
    return (
        <Fragment>
            <div className="col-md-3">
                <div class="card text-left my-3">
                  <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" alt="" />
                  <div class="card-body">
                    <h4 class="card-title text-success">{data.user.name}</h4>
                    <p class="card-text ">{data.user.email}</p>
                    <p class="card-text">{data.user.address.street}</p>
                    <a href="" className='btn btn-info call'>Call : {data.user.phone}</a>
                  </div>
                </div>           
            </div>
        </Fragment>
    )
}

export default Members
