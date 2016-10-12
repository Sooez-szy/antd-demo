/**
 * Created by Administrator on 2016/10/12.
 */
import React from 'react';
import {Form ,Checkbox, Button ,Input ,Tooltip,Icon ,Radio} from 'antd';
const FormItem = Form.Item;
function noop() {
    return false;
}
export class AntForm3 extends React.Component{
    handleReset(e){
        e.preventDefault();
        this.props.form.resetFields();
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((errors,values)=>{
            if(errors){
                console.log('Errors in Form' + values);
                return
            }
            console.log('Submit!!');
            console.log(values);
        })
    }
    checkPass(rule,value,callback){
        const {validateFields} = this.props.form;
        if(value){
            //强制验证 确认密码栏
            validateFields(['rePasswd'], {force: true});
        }
        callback();
    }
    checkPass2(rule,value,callback){
        const {getFieldValue} = this.props.form;
        if(value && value !== getFieldValue('password')){
            callback('请确认两次密码是否一致！')
        }else{
            callback();
        }

    }
    userExists(rule, value, callback) {
        if (!value) {
            callback();
        } else {
            setTimeout(() => {
                if (value === 'JasonWood') {
                    callback([new Error('Sorry, the user name is already in use.')]);
                } else {
                    callback();
                }
            }, 2000);
        }
    }
    render(){
        const {getFieldDecorator, getFieldError, isFieldValidating} = this.props.form;
        const formItemLayout = {
            labelCol:{span:7},
            wrapperCol:{span:12}
        };
        return (
            <div className="main container" style={{marginTop:50+'px'}}>
                <Form horizontal style={{maxWidth:480+'px'}}>
                    {/*用户名及验证*/}
                    <FormItem {...formItemLayout} label='用户名' hasFeedback help={isFieldValidating('username') ? '验证中...' : (getFieldError('username') || []).join(', ')}>
                        {getFieldDecorator('username',{
                            rules: [
                                { required: true, min: 5, message: '用户名最少五个字符...' },
                                { validator:this.userExists}  //自定义验证规则
                            ]
                        })(
                            <Input placeholder="请输入用户名..."/>
                        )}
                    </FormItem>
                    {/*邮箱及验证*/}
                    <FormItem {...formItemLayout} label="邮箱" hasFeedback >
                        {getFieldDecorator('email',{
                            //设置不同事件触发不同校验规则
                            validate:[{
                                rules:[{required:true,message:'请输入邮箱'}],
                                trigger:'onBlur'
                            },{
                                rules:[{type:'email',message:'请输入正确的邮箱...'}],
                                trigger:['onBlur','onChange']
                            }]
                        })(
                            <Input type="email" placeholder="请输入邮箱地址..." />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码" hasFeedback >
                        {getFieldDecorator('password',{
                            rules:[
                                {required:true,whitespace:true,message:'请输入您的密码'},
                                {validator:this.checkPass.bind(this)}
                            ]
                        })(
                            <Input type="password" autoComplete="off" onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="确认密码" hasFeedback >
                        {getFieldDecorator('rePasswd',{
                            rules:[
                                {required:true,whitespace:true,message:'请输入您的密码'},
                                {validator:this.checkPass2.bind(this)}
                            ]
                        })(
                            <Input type="password" autoComplete="off" onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}/>
                        )}
                    </FormItem>
                    <FormItem wrapperCol={{ span: 12, offset: 7 }}>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>OK</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type="ghost" onClick={this.handleReset.bind(this)}>Reset</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
AntForm3 = Form.create()(AntForm3);