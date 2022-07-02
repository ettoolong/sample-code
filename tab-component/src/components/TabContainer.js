import React, { useState } from 'react';
import Tab from './Tab'
import TabPanel from './TabPanel'
import './TabContainer.scss'

function TabContainer({ tabs }) {
  const [tabIndex, setTabIndex] = useState(0)

  function selectTab(index) {
    console.log(index)
    setTabIndex(index)
  }

  return (
    <div className="tabContainer">
      <div className="tabHeader">{tabs.map((tab, index) => (
        <Tab
          key={tab.name}
          text={tab.name}
          selected={tabIndex === index}
          onClick={() => selectTab(index)}
        />
      ))}</div>
      {tabs.map(((tab, index) => (
        <TabPanel
          key={tab.name}
          show={tabIndex === index}
          content={tab.content}
        />
      )))}
    </div>
  )
}

export default TabContainer
