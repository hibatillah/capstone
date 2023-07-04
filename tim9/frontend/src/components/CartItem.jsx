import React, {useState} from "react";

const CartItem = ({ img, product, harga, total }) => {
  const [jumlah, setJumlah] = useState(1);
  return (
    <div className="px-16">
        <div className="grid grid-cols-5 items-center border-b-2">
        <div className="w-40 aspect-square">
            <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
        <div>
            <p>{product}</p>
            <p className="text-emerald-500 underline">Remove</p>
        </div>
        <p>{harga}</p>
        <div className="flex gap-2 border-2 w-16 justify-center border-emerald-500">
            {/* Tombol Kurang */}
            <button
            onClick={() =>
                setJumlah((prev) => (prev === 0 ? prev - 0 : prev - 1))
            }
            
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
            >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
            </button>
            <p>{jumlah}</p>
            {/* Tombol Tambah */}
            <button
            onClick={() => setJumlah((prev) => prev + 1)}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
            >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            </button>
        </div>
        <p>{total}</p>
        </div>
    </div>
  );
};

export default CartItem;
