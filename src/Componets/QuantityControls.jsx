const QuantityControls = ({ quantity, onDecrease, onIncrease }) => (
  <div className="flex items-center border rounded">
    <button 
      onClick={onDecrease}
      className="px-3 py-1 hover:bg-gray-100"
      style={{ color: '#112430' }}
    >
      -
    </button>
    <span className="px-3" style={{ color: '#112430' }}>{quantity}</span>
    <button 
      onClick={onIncrease}
      className="px-3 py-1 hover:bg-gray-100"
      style={{ color: '#112430' }}
    >
      +
    </button>
  </div>
);

export default QuantityControls;