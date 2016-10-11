/**
 * Created by Administrator on 2016/10/10.
 */
import React from 'react';
import {Icon} from 'antd';
export class QuestionFormitem extends React.Component{
    onVoteUp(){
        var newCount = parseInt(this.props.question.voteCount + 1);
        this.props.onVote(this.props.question.key, newCount);
    }
    onVoteDown(){
        var newCount = parseInt(this.props.question.voteCount - 1);
        this.props.onVote(this.props.question.key, newCount);
    }
    render(){
        var question = this.props.question;
        return (
            <div className="media" key={this.props.question.key}>
                <div className="media-left">
                    <button className="btn btn-default" onClick={this.onVoteUp.bind(this)}>
                        <Icon type="up"/>
                        <span className="vote-count">{question.voteCount}</span>
                    </button>
                    <button className="btn btn-default" onClick={this.onVoteDown.bind(this)}>
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