export const MaterialCard = ({ title, value, bg }) => {
  return (
    <div className={`p-5 flex-auto rounded-lg ${bg}`}>
      <h2 className="font-bold text-gray-800">{title}</h2>
      <p className="text-end text-lg font-medium">{value}</p>
    </div>
  )
}