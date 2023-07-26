import React from 'react';
import Script from 'next/script';

export const Reviews = () => {
  return (
    <div
      style={{
        boxShadow: '0 0 0 100vmax #fafafa',
        WebkitClipPath: 'inset(0 -100vmax)',
        clipPath: 'inset(0 -100vmax)',
      }}
    >
      <Script src="https://widget.clutch.co/static/js/widget.js" />
      <div
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="12"
        data-height="375"
        data-nofollow="true"
        data-expandifr="true"
        data-scale="100"
        data-reviews="2175967,2154420,2152916,2127222,2126514"
        data-clutchcompany-id="2117207"
      ></div>
    </div>
  );
};
