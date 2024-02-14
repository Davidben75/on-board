import React from 'react';

const page = () => {
    return (
        <main className="mx-auto mt-8  pt-8 w-full max-w-xs ">
        <form className="">
            <h1>Sign in </h1>

            <label htmlFor="">
                Mail : 
                <input type="mail"  required />
            </label>

            <label htmlFor="">
                Password : 
                <input type="password" />    
            </label>

            <label htmlFor="">
                Confirm your password : 
                <input type="password" />    
            </label>    

        </form>
        
    </main>
    );
};

export default page;