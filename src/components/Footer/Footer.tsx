import React from 'react'
import { StyledFooter } from './StyledFooter'

const Footer = () => {
  const current_date=new Date();
  const current_year=current_date.getFullYear();

  return (
    <StyledFooter>
      <div className="copyright">{current_year}&nbsp;© Taiwan Stock. All Right Reserved</div>
    </StyledFooter>
  )
}

export default Footer