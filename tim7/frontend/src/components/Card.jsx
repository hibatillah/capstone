export const CardScore = ({ ket, img, judul, desc }) => {
  return (
    <div className="bg-white aspect-[10/3] items-center rounded-lg py-7 px-4">
      <div className="flex justify-between mb-3">
        <p className="font-bold">{judul}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </div>
      <div className="flex justify-between">
        <div className="w-12 h-12">
          <div className="flex gap-3 items-center">
            <img src={img} alt="" className="w-full h-full object-cover" />
            <p className="font-bold">{desc}</p>
          </div>
        </div>
        <div>
          <p>{ket}</p>
        </div>
      </div>
      <p className="text-right text-sm">Compared to Jan 2022</p>
    </div>
  );
};

export const Bahanbakucard = ({img,nama,stock}) =>{
  return(
    <div className="bg-white rounded-lg px-3 py-6 flex items-center gap-3">
      <div className="w-10 h-10 bg-primary rounded-full p-1">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <p>{stock}</p>
        <p className="text-sm text-slate-400">{nama}</p>
      </div>
    </div>
  )
}
