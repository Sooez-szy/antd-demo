/**
 * Created by Administrator on 2016/10/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import {Button} from 'antd';
import {Icon} from 'antd';
import {Input} from 'antd';
import '../css/bootstrap.min.css';
import '../css/index.css';
import {QuestionForm} from './QuestionForm';
import {QuestionFormList} from './QuestionFormList';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formDisplayed: false,
            question:[{
                key: 1,
                title:'产品经理与程序员矛盾的本质是什么？',
                description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
                voteCount: 10,
            }]
        };
    }

    /**
     * 添加问题按钮表单显示隐藏切换
     * @param e
     */
    onToggleForm(e) {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        })
    }

    /**
     * 新增问题 表单提交方法
     * @param qst
     */
    onNewQuestion(qst){
        //接收子组件 question的对象
        qst.key = this.state.question.length + 1;
        var questions = this.state.question;
        var newQuestions = questions.concat(qst);

        this.setState({
            question:newQuestions
        })
    }

    render() {
        return (
            <div id="app">
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React问答</h1>
                        <Button id="add-question-btn" type="primary" size="large"
                                onClick={e=>this.onToggleForm(e)}><Icon type="plus"/>添加问题</Button>
                    </div>
                </div>
                <div className="main container">
                    <QuestionForm formDisplayed={this.state.formDisplayed} onToggleForm={e=>this.onToggleForm(e)} onNewQuestion={this.onNewQuestion.bind(this)}/>
                    <QuestionFormList  question={this.state.question} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)

