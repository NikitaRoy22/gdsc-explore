import Head from 'next/head'
import Image from 'next/image'
import EventsLayout from '../components/events/EventsLayout'
import Sponsors from '../components/Sponsors'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div id="events-section">
         <EventsLayout/>
      </div>
      <div id="sponsors-section">
        <Sponsors/>
      </div>
      <div id="faq-section">
        <Faq/>
      </div>
      <div id="footer-section">
        <Footer/>
      </div>
    </>
  )
}
