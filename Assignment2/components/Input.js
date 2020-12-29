import { useState } from "react"

const Input = (props) => {
    return(
        <div className='flex-row'>
            <form onSubmit={event =>  props.handler(event, "test")}>
            <input 
            type='string'
            placeholder='Enter here'
            className='w-52 p-2 border-2 border-gray-300 rounded mr-2'
            />
            <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-2 rounded' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Input