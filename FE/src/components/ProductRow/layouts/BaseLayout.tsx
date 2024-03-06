import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../partials/Header'
import Footer from '../../../partials/Footer'
type Props = object

const BaseLayout = (props: Props) => {
  return (
    <div>
      <header className=''>
        <Header />
      </header>
      <main className='pt-[120px] md:pt-[84px]'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default BaseLayout