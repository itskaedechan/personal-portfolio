export default function ZenMoment() {
  //   const quote = "";
  const quote = "It is not as important how we start, but how we finish.";
  return (
    <div className="mt-6 flex justify-center">
      {!quote ? (
        <button className="bg-accent w-72 rounded-md py-2.5 font-cg text-[#faf9f6]">
          Click for a Zen Moment
        </button>
      ) : (
        <div className="my-20 w-full max-w-md">
          <p className="charcoal-text text-center font-cg text-2xl font-medium">
            {quote}
          </p>
          {/* add button here for More Zen - later */}
        </div>
      )}
    </div>
  );
}
