import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApproveCard from './ApproveCard';

const App = () => {
    return (
    <div>
        <div className="ui container comments">

            <ApproveCard>
                <CommentDetail
                isApproved={false}
                avatar={faker.image.avatar()}
                name={faker.name.firstName()} 
                timeStamp="Today at 4:09PM" 
                content="Sup Bruh!" />
                <CommentDetail
                isApproved={false}
                avatar={faker.image.avatar()}
                name={faker.name.firstName()} 
                timeStamp="Today at 5:09PM" 
                content="Yo, what are those?" />
            </ApproveCard>
        </div>
    </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));