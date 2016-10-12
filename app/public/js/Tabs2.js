/**
 * Created by Administrator on 2016/10/12.
 */
import React from 'react';
import {Tabs} from 'antd';
import {AntTable} from './AntTable';
const TabPane = Tabs.TabPane;
export class MyTab2 extends React.Component{
    render(){
        return (
            <div className="main container" style={{marginTop:50+'px'}}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="表格1" key="1"><AntTable /></TabPane>
                </Tabs>
            </div>
        )
    }
}