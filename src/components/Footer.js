import React from 'react'

function Footer() {
    return (
        <footer className='h-40 bg-blue-600 sticky '>
            <div className=' p-5 flex justify-around '>
                <div className='text-center flex flex-col justify-center'>
                    <h1 className='text-3xl'>Welcome To Work Manager</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='text-center'>
                    <h1>Imp</h1>
                    <ul>
                        <li>youTube</li>
                        <li>Whatsapp</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer