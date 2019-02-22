import React, { Component } from 'react';
import faker from 'faker'
import Comment from './comment'
import ApprovalCard from './approvalcard'

class Comments extends Component {
    render() {
        return (
            <div className="ui-container comments">
                <ApprovalCard>
                    <h4>Warning!</h4>
                    <p>Are you sure?</p>
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        image={faker.image.avatar()}
                        author={faker.internet.userName()}
                        time={faker.date.recent().toDateString()}
                        comment={faker.lorem.sentence()}
                        />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        image={faker.image.avatar()}
                        author={faker.internet.userName()}
                        time={faker.date.recent().toDateString()}
                        comment={faker.lorem.sentence()}
                        />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        image={faker.image.avatar()}
                        author={faker.internet.userName()}
                        time={faker.date.recent().toDateString()}
                        comment={faker.lorem.sentence()}
                        />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        image={faker.image.avatar()}
                        author={faker.internet.userName()}
                        time={faker.date.recent().toDateString()}
                        comment={faker.lorem.sentence()}
                        />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        image={faker.image.avatar()}
                        author={faker.internet.userName()}
                        time={faker.date.recent().toDateString()}
                        comment={faker.lorem.sentence()}
                        />
                </ApprovalCard>
            </div>
        );
    }
}

export default Comments;
