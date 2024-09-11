import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MarketDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { markets } = useSelector((state: any) => state.market);
  const market = markets.find((m: any) => m.pair_id.toString() === id);

  if (!market) return <div>Market not found</div>;

  return (
    <div>
      <h1>{market.name.fa}</h1>
      <p>Price: {market.buy} / {market.sell}</p>
      {/* Additional details */}
    </div>
  );
};

export default MarketDetails;
