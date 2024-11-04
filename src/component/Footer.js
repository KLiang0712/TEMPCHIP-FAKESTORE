import React from "react";
// import Exhibit from '../images/exhibit2-2.svg';
import FootNote from '../images/footer2-2.svg';

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        {/* <img className="h-[400px]" src={Exhibit} alt="" /> */}
          <p className="font-bold">Copyright &copy; FakeStore API 2022-2024.</p>
          <p className="font-bold">All rights reserved.</p>
      </div>

      {/* image */}
      <div className='hiden lg:block'>
        <div>
          <img src={FootNote} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer; 