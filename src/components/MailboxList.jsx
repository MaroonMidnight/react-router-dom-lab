import { Link } from "react-router-dom";

const mailboxList = (props) => {
    return(
        <>
            <ul>
                {props.mailboxes.map((currentMailbox) => (
                    <li className='mail-box' key={currentMailbox}>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>mailbox {currentMailbox._id}</Link>
                        
                    </li>
                ))}
            </ul>
        </>
    )
}

export default mailboxList