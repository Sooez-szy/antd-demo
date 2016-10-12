/**
 * Created by Administrator on 2016/10/12.
 */
import React from 'react';
import {Tabs} from 'antd';
import {AntForm} from './AntForm';
import {AntForm2} from './AntForm2';
import {AntForm3} from './AntForm3';
const TabPane = Tabs.TabPane;
export class MyTab extends React.Component{
    render(){
        return (
            <div className="main container" style={{marginTop:50+'px'}}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="平行排列表单" key="1"><AntForm /></TabPane>
                    <TabPane tab="垂直排列表单" key="2"><AntForm2 /></TabPane>
                    <TabPane tab="表单验证" key="3"><AntForm3 /></TabPane>
                </Tabs>
            </div>
        )
    }
}