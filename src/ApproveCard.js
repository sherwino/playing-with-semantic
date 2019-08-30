import React from 'react';


const ApproveCard = (props) => {

    const handleApprove = (e) => {
        console.log('To mark these as approved we might need to use state', e);

    }

    return (
        <div>
            {props.children && 
                <div className="ui card">
                    <div className="ui content">
                        {!props.children ? <p>Nothing to Approve</p> : props.children.map((child) => {
                                if(child.isApproved) { 
                                    return <span>Approved {child.name}'s comment</span>;
                                }

                                return child;
                            })
                        }
                    </div>
                    <div className="ui extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={handleApprove}>Approve</div>
                            <div className="ui basic red button">Reject</div>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default ApproveCard;