import React from "react";
//import FootNote from '../images/footer2-2.svg';

const Footer = () => {
  return (
    <footer className="bg-cyan-600 py-12">
      <div className="container mx-auto text-bold">
        {/* <img className="h-[400px]" src={FootNote} alt="" /> */}
        <h3 className="text-white font-bold text-center">
          Copyright &copy; FakeStore API 2022-2024.</h3>
        <h3 className="text-white font-bold text-center">All rights reserved.</h3>
      </div>
    </footer>
  );
}

export default Footer; 