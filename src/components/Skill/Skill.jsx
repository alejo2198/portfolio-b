import './Skill.scss'

const Skill = ({skill}) => {
    return (
        <li class="skill" key={skill.key}>
            <i class={`${skill.icon} skill_icon`} title="icon for html"></i>
            <p class="skill_name">{skill.name}</p>
        </li>
    );
};

export default Skill;