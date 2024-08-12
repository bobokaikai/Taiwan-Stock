import React,{useState,useEffect} from 'react'
import { StyledHomeLayout } from "./StyledHomeLayout"
import { Outlet } from 'react-router'
import { Navbar, Footer } from "../../components"
import SideBar from '@/components/SideBar/SideBar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { createContext } from 'react'
import { useNavigation } from 'react-router'
import Loader from '@/components/Loader/Loader'


export const fireBaseUserStatus=createContext("")

const HomeLayout = () => {
  const [user, setUser] = useState(null)
  const navigation=useNavigation();
  
  const isLoading =navigation.state==='loading'

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user);
        
        return;
      }
      setUser(null)
    })

    return ()=>unsubscribe()
  },[])
  console.log(user)
  return (
    <StyledHomeLayout>
      <fireBaseUserStatus.Provider value={{user}}>
      <div className="main_layout">
        {/* {isLoading && <Loader/>} */}
        <SideBar />
        <div className="right_main_content">
          <Navbar />
          <div className="content_wrap">
            <Outlet/>
          </div>
        
        </div>
      </div>
      </fireBaseUserStatus.Provider>
    </StyledHomeLayout>
  )
}

export default HomeLayout