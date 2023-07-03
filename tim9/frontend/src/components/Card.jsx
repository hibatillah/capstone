import Menu1 from "../assets/img/menu1.png";
import { Star } from "./Svg";

export const MenuCard = ({img,menu,desc}) => {
  return (
    <div className="w- flex flex-col items-center px-10 py-10 bg-white rounded-lg shadow-lg relative gap-6 ">
      <img src={img} alt="" className="w-40 aspect-square bg-contain" />
      <div className="w-full h-px bg-slate-500 px-10"></div>
      <div>
        <p className="font-bold text-xl">{menu}</p>
        <p className="text-[#333333]">
          {desc}
        </p>
      </div>
      <button className="px-10 py-2 rounded-xl bg-button absolute -bottom-5 left-1/2 -translate-x-1/2 text-white">
        Order Now
      </button>
    </div>
  );
};

export const TestimoniCard = ({img,coment,name}) => {
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
