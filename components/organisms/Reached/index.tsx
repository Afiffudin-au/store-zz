import React from 'react'
import ReachItem from '../../molecules/ReachItem'

function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem title='290M+' desc='Players Top Up' verticalLine />
          <ReachItem title='12.500' desc='Games Availablep' horizontalVertical horizontalMargin />
          <ReachItem title='99,9%' desc='Happy Players' horizontalVertical horizontalMargin />
          <ReachItem title='4.7' desc='Rating Worldwide' horizontalMargin />
        </div>
      </div>
    </section>

  )
}

export default Reached