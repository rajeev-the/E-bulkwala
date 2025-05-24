const PricingTiers = () => {
  const tiers = [
    { price: "US$0.14", quantity: "500–999 Pieces" },
    { price: "US$0.13", quantity: "1,000–4,999 Pieces" },
    { price: "US$0.10", quantity: "5,000+ Pieces" },
    { price: "US$0.09", quantity: "10,000+ Pieces" },
    { price: "US$0.08", quantity: "50,000+ Pieces" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="mt-5 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden px-4 py-6">
        <div className="flex gap-4 w-max">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#112430] mb-2">
                  {tier.price}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {tier.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTiers;




// Add this CSS in your global styles for scrollbar hiding
