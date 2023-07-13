export const ScoreCard = ({ bg, total, desc }) => {
  return (
    <div>
      <div
        className={`${bg} w-full py-5 flex flex-col justify-center items-center rounded-lg`}
      >
        <p className="text-xl text-white">{total}</p>
        <p className="text-sm text-white">{desc}</p>
      </div>
    </div>
  );
};


