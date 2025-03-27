// src/components/MailboxList/MailboxList.jsx

import { Link } from "react-router";

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    // <li key={mailbox.boxOwner}>
                    <li class='mail-box'>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            {mailbox._id}
                        </Link>
                        {/* will need to use a block element instead of inline for formatting's sake */}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;