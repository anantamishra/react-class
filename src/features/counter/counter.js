import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='flex min-h-screen justify-center items-center gap-4 '>
            <div className='flex gap-5'>
                <button className='bg-red-500 p-5 rounded'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className=' p-5'>{count}</span>
                <button className='bg-red-500 p-5 rounded'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <div className='flex gap-5'>
                    <input type='number' className='border p-5' placeholder='Enter Amount' />
                    <button className='bg-red-500 p-5 rounded'
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Increment by Amount
                    </button>
                </div>
            </div>
        </div>
    )
}