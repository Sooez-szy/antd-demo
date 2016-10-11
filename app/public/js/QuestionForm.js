/**
 * Created by Administrator on 2016/10/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Input} from 'antd';
import {Button} from 'antd';
export class QuestionForm extends React.Component{
    /**
     * 处理表单提交 将新的question对象传递给父组件
     * @param e
     */
    handleForm(e){
        e.preventDefault();
        //创建新的问题对象
        var newQuestion = {
            title : ReactDOM.findDOMNode(this.refs.titleInput).getElementsByTagName('input')[0].value,
            description : ReactDOM.findDOMNode(this.refs.descInput).getElementsByTagName('textarea')[0].value,
            voteCount : 0
        };
        ReactDOM.findDOMNode(this.refs.titleInput).getElementsByTagName('input')[0].value = '';
        ReactDOM.findDOMNode(this.refs.descInput).getElementsByTagName('textarea')[0].value = '';
        //调用父组件创建新对象方法
        this.props.onNewQuestion(newQuestion);
    }
    render(){
        var formObj = {
            display: this.props.formDisplayed ? 'block' : 'none'
        };
        return (
            <form name="addQuestion" className="clearfix" style={formObj}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <Input ref="titleInput" placeholder="您的问题的标题"  className="form-control" id="qtitle" />
                </div>
                <Input ref="descInput" type="textarea" placeholder="问题的描述"  className="form-control" rows="3" style={{marginBottom:20+'px'}}/>
                <Button type="primary" onClick={this.handleForm.bind(this)} className="pull-right" style={{marginBottom:20+'px',marginLeft:20+'px'}}>确认</Button>
                <Button type="ghost" onClick={this.props.onToggleForm} className="pull-right" style={{marginBottom:20+'px'}}>取消</Button>
            </form>
        )
    }
}

