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

export const ScoreCard2 = ({ title, desc }) => {
  return (
    <div className="score-card">
      <h1>{title}</h1>
      <p className="font-medium">{desc}</p>
    </div>
  );
};

export const MenuCard = ({ num, title, desc, image }) => {
  return (
    <div className="flex-[1_1_370px] flex flex-col items-center gap-5 px-10 py-10 rounded-lg bg-gray-100">
      <p className="text-lg">{num}</p>
      <h1>{title}</h1>
      <p className="text-center text-lg w-4/5">{desc}</p>
      <img
        src={image}
        alt="menu"
        className="w-full h-80 object-cover rounded"
      />
    </div>
  );
};

export const UlasanCard = ({ num, title, desc, image }) => {
  return (
    <div className="flex-[0_1_350px] flex flex-col items-start gap-8 px-10 py-10 rounded-lg bg-gray-100">
      <div className="">
        <p className="mb-1 text-green-600">Pengguna {num}</p>
        <h1>{title}</h1>
      </div>
      <img
        src={image}
        alt="menu"
        className="w-28 h-28 mx-auto object-cover rounded-full"
      />
      <p>{desc}</p>
    </div>
  );
};

export const ProductCard = ({ nama, img, stock }) => {
  return (
    <div className="border-2 border-[#83067F]/30 gap-3 bg-gradient-to-r from-[#e7f5fe] to-[#f3e9fe]  rounded-lg">
      <p className="px-3 py-2 text-xl font-bold">{nama}</p>
      <div className="flex items-center justify-center">
        <div className="w-40 h-40 items-center ">
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex justify-end">
        <p className="px-3">{stock}</p>
      </div>
      <div className="bg-black px-5 rounded-b-lg mt-3">
        <p className=" text-white font-medium py-3">Selengkapnya</p>
      </div>
    </div>
  );
};

export const DetailProductCard = ({ img, desc, stock }) => {
  return (
    <div className="grid grid-cols-2">
      {/* Kiri */}
      <div className="flex flex-col items-center mt-5">
        <div>
          <div className="w-96 h-60 overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4 mt-5">
            <div className="w-16 aspect-square bg-slate-500"></div>
            <div className="w-16 aspect-square bg-slate-500"></div>
            <div className="w-16 aspect-square bg-slate-500"></div>
            <div className="w-16 aspect-square bg-slate-500"></div>
            <div className="w-16 aspect-square bg-slate-500"></div>
          </div>
        </div>
      </div>
      {/* Kanan */}
      <div className="flex flex-col pr-20">
        <p className="text-[#6C6C6C] py-3">{desc}</p>
        <p className="font-bold text-[#FF4242] py-3">Rp.25.000</p>
        <div className="flex gap-3 mb-5">
          <input
            type="number"
            name="jumlah"
            id="jumlah"
            className="border-2 px-2 py-1 w-20 rounded-lg"
          />
          <button className="flex gap-4 items-center bg-[#ed7d2b] px-20 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            Pesan
          </button>
          <button className="border-2 border-[#ed7d2b] flex gap-4 px-9 items-center text-[#ed7d2b] stroke-[#ed7d2b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            Favourite
          </button>
        </div>
        <hr />
        <p className="text-right mt-3 mb-16">Stok Barang : {stock} Pcs</p>
        <hr />
        <div className="flex gap-3 mt-5">
          <p>Share:</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pinterest"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
