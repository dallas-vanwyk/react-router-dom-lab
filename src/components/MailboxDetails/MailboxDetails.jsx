// src/components/MailboxDetails/MailboxDetails.jsx

import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();

    const mailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    return (
        <>
            <h2>Mailbox # {mailbox._id}</h2>
            <dl>
                <dt>Owner:</dt>
                <dd>{mailbox.boxOwner}</dd>
                <dt>Size:</dt>
                <dd>{mailbox.boxSize}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;