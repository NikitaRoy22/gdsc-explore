import Head from 'next/head'
import Image from 'next/image'
import EventsLayout from '../components/events/EventsLayout'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div id="events-section">
         <EventsLayout/>
      </div>
      <div id="footer-section">
        <Footer/>
      </div>
    </>
   
  )
}
