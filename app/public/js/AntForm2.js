/**
 * Created by Administrator on 2016/10/11.
 */
import React from 'react';
import {Form ,Checkbox, Button ,Input ,Icon} from 'antd';
const FormItem = Form.Item;
export class AntForm2 extends React.Component{
    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol:{ span: 6 },
            wrapperCol:{ span: 14 }
        }
        return(
            <div className="main container" style={{marginTop:50+'px'}}>
                <h5 style={{marginBottom:20+'px'}}>垂直排列表单：</h5>
                <Form horizontal style={{maxWidth:400+'px'}}>
                    <FormItem {...formItemLayout} label="用户名">
                        {getFieldDecorator('username')(
                            <Input placeholder="请输入用户名..." />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">
                        {getFieldDecorator('password')(
                            <Input placeholder="请输入密码" />
                        )}
                    </FormItem>

                </Form>
            </div>
        )
    }
}
AntForm2 = Form.create()(AntForm2)