/**
 * Created by Administrator on 2016/10/10.
 */
import React from 'react';
import {Icon} from 'antd';
import {QuestionFormitem} from './QuestionFormItem';

export class QuestionFormList extends React.Component {
    render() {
        var questions = this.props.question;
        var renderQuestion = questions.map(function (qst, index) {
            return <QuestionFormitem key={index + 1} question={qst} onVote={this.props.onVote}/>
        }.bind(this));
        return (
            <div id="questions" className="">
                {renderQuestion}
            </div>
        )
    }
}