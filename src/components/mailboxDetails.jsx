import { useParams } from "react-router-dom";

export default function mailboxDetails(props) {

    const {mailboxId} = useParams()
    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
    console.log(selectedBox)
    return (
        <>
            <h1>Details</h1>
            <h2>{selectedBox.boxHolder}</h2>
            <ul>
                <li>Boxholder: {selectedBox.boxHolder} </li>
                <li>Box Size: {selectedBox.boxSize}</li>
            </ul>
        </>
    )
}