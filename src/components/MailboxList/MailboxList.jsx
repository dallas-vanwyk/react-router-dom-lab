// src/components/MailboxList/MailboxList.jsx

import { Link } from "react-router";

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox.boxOwner}>
                        Mailbox {mailbox._id}: <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxOwner}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;