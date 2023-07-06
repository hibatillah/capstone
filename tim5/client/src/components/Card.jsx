export const MaterialCard = ({ title, value, bg }) => {
  return (
    <div className={`p-5 flex-auto rounded-lg ${bg}`}>
      <h2 className="font-bold text-gray-800">{title}</h2>
      <p className="text-end text-lg font-medium">{value}</p>
    </div>
  )
}

export const ProductCard =({img,menu,desc,harga,stock}) => {
  return(
    <div className="grid grid-cols-2 bg-white items-center mb-10 rounded-lg shadow-lg">
      {/* kiri */}
      <div className="flex flex-col gap-2 p-7 my-5">
        <p className="text-primary font-bold text-xl">{menu}</p>
        <p className='text-[#8D8D8D]'>{desc}</p>
        <p className="text-primary text-xl font-bold">{harga}</p>
        <p className='text-[#1B8733] font-medium'>{stock}</p>
      </div>
      {/* Kanan */}
      <div className='flex flex-col items-center gap-4'>
        <div className='w-36 h-36 rounded-full overflow-hidden'>
          <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <button className='bg-primary px-6 py-2 rounded-full text-white'>Add  to chart</button>
      </div>
    </div>
  )
}