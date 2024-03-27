export default function specialAttack({special}) {
    const arr = special

    arr.forEach(props => {
        if (props.description === undefined || props.description === null) {
            props.description = 'Описание недоступно';
        }
    });

    return arr
}