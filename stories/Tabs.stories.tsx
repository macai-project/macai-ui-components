import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Tab, Tabs } from "../src/index"

export default {
  component: Tabs,
} as ComponentMeta<typeof Tabs>

interface TabPanelProps {
  index: number
  value: number
}

const TabPanel: React.FC<TabPanelProps> = (props) => (
  <div>{props.value === props.index && <>{props.children}</>}</div>
)

export const TabComponent = () => {
  const [value, setValue] = React.useState(0)

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onChange={handleChangeTab}>
        <Tab sx={{ width: "172px" }} label="LIVE" />
        <Tab sx={{ width: "172px" }} label="INACTIVE" />
      </Tabs>

      <TabPanel value={value} index={0}>
        TAB1
      </TabPanel>
      <TabPanel value={value} index={1}>
        TAB2
      </TabPanel>

      <TabPanel value={value} index={1}></TabPanel>
    </>
  )
}
