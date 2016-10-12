/**
 * Created by Administrator on 2016/10/11.
 */
import React from 'react';
import {Form ,Checkbox, Button ,Input ,Tooltip,Icon ,Radio} from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
export class AntForm2 extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        //设置表单值
        this.props.form.setFieldsValue({user: 'dsadsa'});
        //获取表单值
        console.log(this.props.form.getFieldsValue())
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol:{ span: 6 },
            wrapperCol:{ span: 14 }
        }
        return(
            <div className="main container" style={{marginTop:50+'px'}}>
                <Form horizontal style={{maxWidth:480+'px'}} onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem {...formItemLayout} label="用户名">
                        {getFieldDecorator('user',{initialValue:'szy'})(
                            <Input placeholder="请输入用户名..." />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">
                        {getFieldDecorator('pass',{initialValue:''})(
                            <Input type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="性别">
                        {getFieldDecorator('gender',{initialValue:'female'})(
                            <RadioGroup>
                                <Radio vlaue="male">男</Radio>
                                <Radio value="female">女</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="备注" help="请输入内容...">
                        {getFieldDecorator('remarks')(
                            <Input type="textarea" placeholder="请输入内容..."/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label={<span>是否同意条款<Tooltip title="最新条款"><Icon type="question-circle-o"></Icon></Tooltip></span>}>
                        {getFieldDecorator('agreement',{initialValue:false,valuePropName:'checked'})(
                            <Checkbox>同意</Checkbox>
                        )}
                    </FormItem>
                    <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                        <Button type="primary" htmlType="submit">OK</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
AntForm2 = Form.create()(AntForm2);