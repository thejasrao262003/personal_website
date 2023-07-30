import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/footer";
import Heroimg2 from "../components/Heroimg2";
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT ME." text="I would love to collaborate on amazing projects!"/ >
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact