import React,{createContext, useState} from 'react'
import About from './pages/About';
import Contact from './pages/Contact';

export interface ContextProps{
    name:string;
    age?:number | null;
}
const initalValues = {
    name:'',
    age:null
}

const user = {
    name:'Tushar Kaira',
    age:20
}

export const UserContext = createContext<ContextProps>(initalValues);

const useContextHook = () => {
    const [users,setUsers] = useState(user);
  return (
    <>
    <UserContext.Provider value={user}>
        <Contact />
    </UserContext.Provider>
    </>
  )
}

export default useContextHook;