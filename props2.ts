interface WelcomeProps {
    name: string;
    age: number;
    marks: number;
}

function Welcome(props: WelcomeProps) {
    return `Hello, ${props.name}! You are ${props.age} years old and scored ${props.marks} marks.`;
}

const greetProps: WelcomeProps = { name: "Shridhar", age: 22, marks: 85 };

const result=Welcome(greetProps);

console.log(result);