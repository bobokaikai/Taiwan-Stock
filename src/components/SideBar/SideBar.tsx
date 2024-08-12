import React, { useState,useContext } from 'react'
import { StyledSideBar } from './StyledSideBar';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiWalletFill } from "react-icons/ri";
import { RiStockLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { LuNewspaper } from "react-icons/lu";
import MainAmerican from '../MainAmerican/MainAmerican';
import { RiCharacterRecognitionFill } from "react-icons/ri";

import { Button } from '../ui/button';
import { fireBaseUserStatus } from '@/pages/HomeLayout/HomeLayout';

import { FaLock } from "react-icons/fa";

// interface SideBarPros{
//   props:unknown;
//   className:string;
// }

const navLink_constants = [
  {
    id: 1,
    href: '/',
    icon: <MdOutlineSpaceDashboard />,
    nav: '導覽列',
  },
  {
    id: 2,
    href: '/stock/2330',
    icon: <MdOutlineSpaceDashboard />,
    nav: '個股即時報價',
  },
  {
    id: 3,
    href: '/stock_history/2330',
    icon: <RiWalletFill />,
    nav: '個股歷史趨勢',
  },
  // {
  //   id: 3,
  //   href: '/etf',
  //   icon: <RiStockLine />,
  //   nav: 'ETF',
  // },
  {
    id: 4,
    href: '/stock_news',
    icon: <LuNewspaper />,
    nav: '台股新聞',
  },
  {
    id: 5,
    href: '/overall_american_stock',
    icon: <RiCharacterRecognitionFill />,
    nav: '美股總攬',
  },
]

const SideBar = () => {
  const {user}=useContext(fireBaseUserStatus)
  return (
    <StyledSideBar>
      <div className="link_wrap">
        <div className="logo_name">
          Taiwan Stock
        </div>
        {navLink_constants.map(({ id, href, icon, nav }) => <NavLink key={id} to={!user && id>2?'#':href} className={`navLink_container relative`} >
          <div className="nav_icon">{icon}</div>
          <div className="nav_text">{nav.toLocaleUpperCase()}</div>
          {!user && id>2 ?<div className='absolute backdrop-blur-[1px] w-full h-full'><FaLock className='absolute right-10'/></div>:null}
        </NavLink>)}
        
        {!user? <div className="absolute bottom-10  flex flex-row">
          <Button className='text-white flex flex-row gap-2'><NavLink to={"/auth/sign_in"}>登入 </NavLink>| <NavLink to={"/auth/sign_up"}> 註冊</NavLink></Button>
        </div>:null}
       
      </div>
    </StyledSideBar>
  )
}

export default SideBar