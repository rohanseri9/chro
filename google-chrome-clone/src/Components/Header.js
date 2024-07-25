import React from 'react';

const Header = () => {
  return (
    <header className=" bg-white-600  text-black p-4 flex justify-between items-center">
      <div className="logo text-2xl font-bold">Google Chrom</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#download" className="hover:underline">Download</a></li>
          <li><a href="#download" className="hover:underline">The Browser by Google</a></li>
          <li><a href="#download" className="hover:underline">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
