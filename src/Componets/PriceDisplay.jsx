const PriceDisplay = ({ price, className }) => (
  <p className={className} style={{ color: '#112430' }}>
    €{price.toFixed(2).replace('.', ',')}
  </p>
);

export default PriceDisplay;