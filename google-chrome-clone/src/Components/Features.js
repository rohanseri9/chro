import React from 'react';

const Features = () => {
  return (
    <section id="features" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="feature p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">Speed</h3>
          <p>This is no ordinary address bar
          Search, calculate, translate, get the latest weather, and more with Google..</p>
        </div>
        <div className="feature p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">Access</h3>
          <p>Access your Chrome across devices</p>
        </div>
        <div className="feature p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
          <p>Stay organized with tabs
          Tabs help you stay organized, keep track of multiple pages, and multi-task. You can.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
