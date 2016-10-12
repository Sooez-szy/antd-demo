/**
 * Created by Administrator on 2016/10/12.
 */
import React from 'react';
import { Table,Icon } from 'antd';
/**
 * 表单结构
 * @type {*[]}
 */
const columns = [
    {
        title: '姓名', //表头显示的标题
        dataIndex: 'name',
        key: 'name',
        render: text=><a href="#">{text}</a>
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                <a href="#">Operation 一 {record.name}</a>
                <span className="ant-divider"/>
                <a href="#">Next operation</a>
                <span className="ant-divider"/>
                <a href="#" className="ant-dropdown-link">
                More <Icon type="down"/>
                </a>
            </span>
        )
    }
];