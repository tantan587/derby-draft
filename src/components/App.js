import { Menu1, CountdownBox, LeftPane1, CenterPane1, RightPane1, DraftButtonBox, AddNewManagerBox, DraftInfoBox, QueueBox } from './containers'
import '../stylesheets/App.css'
import React from 'react'
import {Fixed, Flex, Layout} from 'react-layout-pane'

const App = () =>

    <Layout type="column">
      <Fixed>
        <Menu1 />
      </Fixed>
      <Flex>
        <Layout type="row">
          <Fixed className="left-pane">
            <Layout type="column">
              <Fixed>
                <CountdownBox />
              </Fixed>
              <Flex>
                <LeftPane1 />
              </Flex>
            </Layout>
          </Fixed>
          <Flex>
            <CenterPane1 />
            <DraftInfoBox/>
            <AddNewManagerBox />
          </Flex>
          <Fixed className="right-pane">
            <Layout type="column">
              <Fixed>
                <DraftButtonBox />
              </Fixed>
              <Flex>
                <QueueBox />
              </Flex>
              <Flex>
                <RightPane1 />
              </Flex>
            </Layout>
          </Fixed>
        </Layout>
      </Flex>
    </Layout>
   
export default App






