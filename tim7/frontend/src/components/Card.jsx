export const CardScore = ({img,judul,desc}) => {
  return (
    <div className="bg-white aspect-[10/3] grid grid-cols-2 items-center rounded-lg py-7">
      <div className="w-14 aspect-square flex mx-auto">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div>
        <p className="text-xl font-bold">{judul}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};
