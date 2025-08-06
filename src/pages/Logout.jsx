import React from 'react';
import Container from '../components/Container';

const Logout = () => {
  return (
    <section>
      <Container>
        <div className='text-center pt-20'>
          <a href="/"
            className='text-white bg-black px-[60px] py-[20px] rounded-[5px] font-bold font-dms text-2xl'>
              Logout
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Logout;
