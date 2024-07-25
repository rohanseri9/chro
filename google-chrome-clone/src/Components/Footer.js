import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white-800 text-black p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Google</p>
    </footer>
  );
};

export default Footer;
