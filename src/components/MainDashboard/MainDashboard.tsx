import { useContext } from 'react'
import FadeIn from 'react-fade-in';
import { StyledMainDashboard } from './StyledMainDashboard'

import MarqueeIndex from './MarqueeIndex';
import { GlobeDemo } from '../GlobalDemo/GlobalDemo';
import TradingViewWidget from '../TradingViewWidget/TradingViewWidget';
import { SparklesCore } from '../ui/sparkles';
import { Fade } from "react-awesome-reveal";
import { fireBaseUserStatus } from '@/pages/HomeLayout/HomeLayout';
const MainDashboard = () => {
  const { user } = useContext(fireBaseUserStatus);

  console.log(user?.displayName)


  return (
    <StyledMainDashboard>
      <section className='flex flex-col gap-4 w-full h-full justify-content-center items-center relative'>
        <MarqueeIndex />
        <div className="w-full absolute inset-0 h-screen ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={3.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          {user && <Fade delay={0} duration={1000} className="w-full md:text-4xl text-3xl lg:text-5xl font-bold text-right text-white z-20 absolute top-[35%] left-[0%] transform -translate-x-1/2 -translate-y-1/2 ">{`歡迎 , ${(user?.displayName)} `}</Fade>}
          <Fade delay={3000} duration={3000} className="w-full md:text-4xl text-3xl lg:text-5xl font-bold text-right text-white z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            最好的交易需要研究，然後是承諾
          </Fade>
        </div>


      </section>

    </StyledMainDashboard>
  )
}



export default MainDashboard