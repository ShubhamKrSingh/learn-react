import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ShubhamKrSingh')
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='flex justify-evenly m-20 p-2 text-center text-3xl text-white bg-gray-600'>
        <div className='w-50 p-2 m-2 rounded-full hover:border hover: border-bg-white-800'>
        <img className='rounded-full' src={data.avatar_url} alt="github avatar"  width={300}/>
        </div>
        {console.log(data)}
        Github followers: {data.followers} <br />
        Public Repos: {data.public_repos}
        
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/ShubhamKrSingh')
    return response.json()
}