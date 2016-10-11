/**
 * Created by Administrator on 2016/10/10.
 */
import React from 'react';
import {Icon} from 'antd';
export class QuestionFormitem extends React.Component{
    render(){
        var question = this.props.question;
        return (
            <div className="media" key={this.props.question.key}>
                <div className="media-left">
                    <button className="btn btn-default">
                        <Icon type="up"/>
                        <span className="vote-count">{question.voteCount}</span>
                    </button>
                    <button className="btn btn-default">
                        <Icon type="down"/>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{question.title}</h4>
                    <p>{question.description}</p>
                </div>
            </div>
        )
    }


}