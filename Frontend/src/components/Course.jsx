import React from 'react'
import { Link } from 'react-router-dom'
import list from '../../public/list.json'
import Cards from './Cards'


function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
     <div className="mt-28 item-center justify-center text-center">
        <h1 className="text-3xl font-semibold md-text-4xl">We're delighted to have you {" "} 
            <span className="text-pink-500">here!  :)</span>
            </h1>
            <p className="mt-12">
            At our bookstore, we believe that learning never stops, and to support your quest for education, we offer a diverse range of courses designed to cater to all interests and proficiency levels. Whether you're looking to delve deeper into literature, master a new language, explore the realms of science and technology, or enhance your professional skills, we have a course tailored just for you. 
            </p>
            <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link>
     </div>
     <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
            list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
        }
     </div>
    </div>
    </>
  )
}

export default Course