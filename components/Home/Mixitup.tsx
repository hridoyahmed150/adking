"use client"
import { useEffect, useRef } from 'react';
import mixitup from 'mixitup';

const Mixitup = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      mixitup(containerRef.current, {
        selectors: {
          target: '.mix',
        },
        animation: {
          duration: 300,
        },
      });
    }
  }, []);

  return (
    <div>
      {/* Filter controls */}
      <div className="controls">
        <button type="button" data-filter="all">All</button>
        <button type="button" data-filter=".category-a">Category A</button>
        <button type="button" data-filter=".category-b">Category B</button>
      </div>

      {/* Container for MixItUp items */}
      <div ref={containerRef} className="mixitup-container">
        <div className="mix category-a">Item A1</div>
        <div className="mix category-b">Item B1</div>
        <div className="mix category-a">Item A2</div>
        <div className="mix category-b">Item B2</div>
      </div>
    </div>
  );
};

export default Mixitup;
