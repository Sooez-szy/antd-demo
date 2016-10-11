/**
 * Created by Administrator on 2016/10/11.
 */
import React from 'react';
import {Form ,Checkbox, Button ,Input ,Icon ,} from 'antd';
const FormItem = Form.Item;
export class AntForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        //获取表单值
        console.log(this.props.form.getFieldsValue())
    }
    render(){
        //生成设置表单域键值方法
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="main container" style={{marginTop:50+'px'}}>
                <h5 style={{marginBottom:20+'px'}}>平行排列表单：</h5>
                <Form inline onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账号">
                        {/*为input设置键值为username,默认值为szy*/}
                        {getFieldDecorator('userName',{initialValue:'szy'})(
                            <Input placeholder="请输入账号..." />
                        )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('passowrd')(
                            <Input type="password" placeholder="请输入密码..."/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('agreement')(
                            <Checkbox>记住我</Checkbox>
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form>
            </div>
        )
    }
}
AntForm = Form.create()(AntForm);
