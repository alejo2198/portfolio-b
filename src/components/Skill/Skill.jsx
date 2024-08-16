import './Skill.scss'

const Skill = ({skill}) => {
    return (
        <li className="skill">
            <i className={`${skill.icon} skill_icon`} title="icon for html"></i>
            <p className="skill_name">{skill.name}</p>
        </li>
    );
};

export default Skill;