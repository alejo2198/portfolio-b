import './ContactIcon.scss'

const ContactIcon = ({contactIcon}) => {
    return (
        <a href={contactIcon.link} className="contact_link">
            <div className="icon-container">
                <img src={contactIcon.icon}  className="contact_icon" alt={`${contactIcon.name} logo`}/>
            </div>
            <p>{contactIcon.name}</p>
        </a>
    );
};

export default ContactIcon;