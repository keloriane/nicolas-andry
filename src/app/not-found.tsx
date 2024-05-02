import React from 'react';
import { headers } from 'next/headers';

export default async function NotFound() {
  return (
    <div>
      <h1
        style={{
          fontSize: '20rem',
          color: '#F3A3A3',
        }}
      >
        404
      </h1>
    </div>
  );
}
