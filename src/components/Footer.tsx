import React from "react";

const Footer = () => {
  //current year
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-sm lg:text-base text-gray-500">
          &copy; Qtec Solution Limited - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
