
const HeaderOption = ({ title, Icon , selected})=>{
  return (
    <div className={`flex space-x-1 cursor-pointer border-b-4 border-transparent pb-3 hover:text-blue-500 hover:border-blue-500 ${selected && "text-purple-700 border-purple-700"}`}>
      <Icon className="h-6"/>

      <p className="hidden sm:inline-flex">{title}</p>
    </div>
)}

export default HeaderOption
