import React from 'react';
import Image from "next/image";

const Loader = () => {
    return (
        <div>
            <Image src="https://media0.giphy.com/media/xUA7aQpQ8BK4A66oJa/giphy.gif?cid=ecf05e47ro93zme3iso5jrn6tafgrwmhp3473r8068kpjpwh&rid=giphy.gif&ct=g" alt="Loading" />
        </div>
    );
};

export default Loader;