import React, { useState } from 'react'
import { X } from 'lucide-react';


const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])



  const submitHandler = (e) => {
    e.preventDefault(e)

    const copyTask = [...task]
    copyTask.push({ title, detail })
    setTask(copyTask)


    setTitle('')
    setDetail('')
  }

  const closeHandler = (idx) => {

    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='flex gap-20'>
      <div>
        <form onSubmit={submitHandler} className='flex flex-col p-3 m-3  w-full h-fit'>
          <input className='border-2 text-3xl p-2 m-2 leading-tight'
            type="text"
            placeholder='Enter Title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            required
          />
          <textarea className='border-2 text-3xl p-2 m-2 leading-tight'
            type="text"
            placeholder='Enter details here'
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value)
            }}
          />
          <button className='border-2 active:scale-95 text-3xl p-2 m-2 leading-tight'>Submit</button>
        </form>
      </div>
      <div className='w-full'>
        <h2 className='text-3xl mb-3 '>Recent Notes</h2>
        <div className='flex gap-5 flex-wrap'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='w-45 relative h-60 rounded-2xl p-4 overflow-auto text-2xl bg-[url("https://imgs.search.brave.com/yjP6PcH7IQyWI45xvZ4gCxemRYiVkZ1b2FdNkzn01N4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/MjA1LzYyOC9zbWFs/bC9jdXRlLWxpbmVk/LXBhcGVyLW5vdGUt/cGFzdGVsLWRvb2Rs/ZS1jcmVhdGl2ZS1v/ZmZpY2Utc3VwcGxp/ZXMtaWxsdXN0cmF0/aW9uLXBuZy5wbmc")] bg-cover bg-center'>
              <h2 onClick={() => {
                closeHandler(idx)
              }} className='absolute top-2 cursor-pointer bg-amber-200 rounded-full right-1'><X /></h2>
              <h2 className='text-2xl font-bold mb-3 ml-5 mt-2'>{elem.title}</h2>
              <p className='text-xl ml-5' >{elem.detail}</p>
            </div>
            
          })}
  
        </div>

      </div>
    </div>
  )
}

export default App
