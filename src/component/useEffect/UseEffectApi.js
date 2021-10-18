import React, { useState, useEffect } from 'react'

const UseEffectApi = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>User List</h2>
            <div classname="container-fluid mt-5">
                <div class="row text-center">


                    {
                        users.map((curElem) => {
                            return (
                                <div class="col-10 col-md-4 mt-5" key={curElem.id}>
                                    <div class="card p-2">
                                        <div class="d-flex align-items-center">
                                            <div class="image"><img src={curElem.avatar_url} alt="" class="rounded" width="155" /></div>
                                            <div class="ml-3 w-100">
                                                <h4 class="mb-0 mt-0 textLeft">{curElem.login}</h4> <span className="textLeft">{curElem.id}</span>
                                                <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div class="d-flex flex-column"><span class="articles">Articles</span> <span class="number1">38</span></div>
                                                    <div class="d-flex flex-column"><span class="followers">Followers</span> <span class="number2">980</span></div>
                                                    <div class="d-flex flex-column"><span class="rating">Rating</span> <span class="number3">8.9</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default UseEffectApi
