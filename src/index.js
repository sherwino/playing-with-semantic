import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApproveCard from './ApproveCard';

const App = () => {
    return (
    <div>
        <div className="ui pointing below label">
            "Sup Bruh"
        </div>
        <CommentDetail name={faker.name.firstName()} />
        <ApproveCard>
        </ApproveCard>
    </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));