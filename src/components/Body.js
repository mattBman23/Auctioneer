import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { AcutionCard } from './AcutionCard';
// import moduleName from '../ho'

export const Body = () => {
  const { docs } = useFirestore('auctions');

  return (
    <div className="album py-5">
      <div className="container">
        {docs && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {docs.map((item, idx) => (
              <AcutionCard key={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
