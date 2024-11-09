import React from "react";
import Exhibit from '../images/exhibit2-2.svg';
import FootNote from '../images/footer2-2.svg';

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-bold">
        <img className="h-[400px]" src={Exhibit} alt="" />
        <img className="h-[400px]" src={FootNote} alt="" />
        <p className="text-black text-right">
          Copyright &copy; FakeStore API 2022-2024.</p>
        <p className="text-black text-right">All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 