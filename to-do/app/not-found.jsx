import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
      <main className="text-center">
          <h2 className='text-3-1'> There was a problem. </h2>
          <p className='text-3-1'>we could not find the page you where looking for.</p>
          <p className='text-3-1'>Go Back To The <Link href="/">Dashboard</Link>.</p>
    </main>
  )
}
