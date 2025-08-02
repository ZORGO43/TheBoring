import React from 'react';

function Home() {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center space-y-10 p-10">
                <a href='/' className="flex items-center justify-center p-10">
                    <img src="/boring.png" alt = "/boring.png" className="max-w-80" />
                </a>

                <a href='/make-me-mad' className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 border border-white p-10 transform transition duration-300 hover:scale-105 cursor-pointer">
                    <h1 className="text-4xl text-center">MAKE ME MAD!</h1>
                    <p className='text-center'>
                    Try to make me mad — if you dare!</p>
                </a>

                <a href='/chat' className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 border border-white p-10 transform transition duration-300 hover:scale-105 cursor-pointer">
                    <h1 className="text-4xl text-center">LONELY?</h1>
                    <p className='text-center'>
                    wanna chat ?</p>
                </a>
            </div>
        </>
    );
}

export default Home;
