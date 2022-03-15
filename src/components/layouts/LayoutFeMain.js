import * as React from 'react'
import HeaderFeMain from '../headers/HeaderFeMain'
// import FooterFeMain from '../footers/FooterFeMain'

function LayoutFeMain(props) {
/* eslint-disable */
  const children = props.children || null
/* eslint-enable */
  return (
    <div>
      <HeaderFeMain />

      <main>
        { children }
      </main>

		{/*<FooterFeMain />*/}
    </div>
  )
}

export default LayoutFeMain
