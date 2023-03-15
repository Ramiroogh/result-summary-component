import React from 'react';
import { useState, useEffect } from 'react';

export const Card = () => {

  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const Response = await fetch('./src/data.json');
        const jsonData = await Response.json();              //esto es una promesa
        setData(jsonData);                                  //recien aca, los datos del json, se pasan al ESTADO
      };

      fetchData();
    }, []);

    return (
      <div className='md:flex md:items-center md:justify-center md:h-screen md:max-w-3xl md:mx-auto'>
        <div className='md:flex bg-white shadow rounded-3xl'>
        <div className='bg-div p-8 md:pt-10 text-center text-white rounded-b-3xl
        md:flex-1 md:rounded-3xl md:flex md:flex-col md:items-center md:justify-center'>
          
          <h1 className='mb-10'>You Result</h1>

          <div className='flex items-center justify-center'>
            <p className='bg-circle w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center gap-2
            rounded-full text-white md:text-6xl text-3xl font-bold'>
            76 <p className='text-slate-200 text-base font-normal'>of 100</p>
            </p>
          </div>

          <h2 className='my-6 text-white font-bold text-lg md:text-2xl'>Great</h2>
          <p>You scored higher than %65 of the people who have taken these test.</p>

        </div>

      <div className='p-8 md:flex-1'>
        <h1 className='text-slate-700 mb-6 text-lg font-bold'>Summary</h1>

      <div className='flex flex-col gap-4'>
        {data.map((item, index) => (

          <div
            key={index}
            style={{
              backgroundColor: `${item.color.slice(0, -1)}, 0.2)`,
              }}
            className='flex items-center justify-between
            p-4 rounded-lg'
          >

          <h2
            style={{
              color: item.color,
              }}
              className='flex items-center gap-3'
          >
            <img src={item.icon} alt={item.category} />
            {item.category}
          </h2>

          
          <p className='flex items-center gap-3 text-slate-500'>
          <span className='text-slate-700 font-bold'
          >{item.score}</span> / 100
          </p>

          </div>
        ))}
        </div>

          <button className='bg-slate-700 py-4 px-6 rounded-full text-white w-full mt-6
          hover:bg-indigo-600 transition-all duration-200'>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card