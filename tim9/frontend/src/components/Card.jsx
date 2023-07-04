import { Star } from "./Svg";

export const MenuCard = ({ img, menu, desc }) => {
  return (
    <div className="w- flex flex-col items-center px-10 py-10 bg-white rounded-lg shadow-lg relative gap-6 ">
      <img src={img} alt="" className="w-40 aspect-square bg-contain" />
      <div className="w-full h-px bg-slate-500 px-10"></div>
      <div>
        <p className="font-bold text-xl">{menu}</p>
        <p className="text-[#333333]">{desc}</p>
      </div>
      <button className="px-10 py-2 rounded-xl bg-button absolute -bottom-5 left-1/2 -translate-x-1/2 text-white">
        Order Now
      </button>
    </div>
  );
};

export const TestimoniCard = ({ img, coment, name }) => {
  return (
    <div className="w- flex flex-col items-center px-10 py-10 bg-white rounded-lg shadow-lg relative gap-3 ">
      <img
        src={img}
        alt=""
        className="w-52 h-52 aspect-square rounded-full bg-contain"
      />
      <div className="flex gap-2">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div>
        <p className="font-bold text-xl text-center">{coment}</p>
        <p className="text-[#7C8087] text-lg text-center">{name}</p>
      </div>
    </div>
  );
};

export const CardInfo = ({ img, judul, desc }) => {
  return (
    <div className="bg-white aspect-[8/3] grid grid-cols-2 items-center rounded-lg py-7">
      <div className="w-10 aspect-square flex mx-auto">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div>
        <p className="text-sm">{judul}</p>
        <p className="text-xl font-bold">{desc}</p>
      </div>
    </div>
  );
};

export const SupplierCard = ({img,nama,desc}) => {
  return (
    <div className="aspect-[6/5] rounded-lg bg-white flex flex-col gap-4 items-center justify-center">
      <div className="bg-slate-400 w-16 h-16 rounded-full overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-xl font-bold text-darkblue">{nama}</p>
      <p className="text-sm text-slate-400">{desc}</p>
      <div className="flex justify-center items-center gap-2">
        <div className="flex bg-darkblue justify-center items-center w-6 h-6 rounded-full stroke-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
        </div>
        <div className="flex bg-darkblue justify-center items-center w-6 h-6 rounded-full stroke-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
