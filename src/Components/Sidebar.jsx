import { NavLink } from 'react-router-dom';


const Sidebar = () => {


  return (
    
     
        <div className="hidden lg:block w-[20%] bg-gray-800 h-[200vh] px-2 py-4">
          
        <div className= {`  text-white text-2xl mb-2 px-2 font-bold `}>
        Dashboard
        </div>
        <hr />
        <div className="hidden lg:block text-white my-2 px-6 py-2 rounded hover:bg-blue-500 hover:shadow cursor-pointer"> <NavLink to={'/'} > Overview </NavLink> </div>
        <div className="hidden lg:block text-white my-2 px-6 py-2 rounded hover:bg-blue-500 hover:shadow cursor-pointer"> <NavLink to={'/assets'}> Assets </NavLink> </div>
        <div className="hidden lg:block text-white my-2 px-6 py-2 rounded hover:bg-blue-500 hover:shadow cursor-pointer"> <NavLink to={'/tickets'}> Tickets </NavLink> </div>

    </div> 

   

    
  );
};

export default Sidebar;
