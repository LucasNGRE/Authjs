import { ModeToggle } from '@/components/toggle.mode'
import React from 'react'

const Home = () => {
  return (
    <main className='w-full h-screen flex flex-col p-10'>
      <div>
        <ModeToggle />
      </div>

    </main>
  )
}

export default Home