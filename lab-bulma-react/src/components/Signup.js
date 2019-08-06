import React from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Message from './Message';
import Container from './Container';

const Signup = () => {
  const message = "This is a message";
  return (
    <div>
      <Navbar />
      <Container>
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g alexsmith@mail.com" />
          <FormField label="Password" type="password" />
          <CoolButton button isInfo type="submit" >Submit</CoolButton>
        </form>
        <Message isInfo title="Message title" content={message} />
      </Container>
    </div >
  )
}

export default Signup;
