interface WelcomeProps {
    name: string;
    marks: number;
}

function Welcome(props: WelcomeProps) {
    return `Hello, ${props.name}! You scored ${props.marks} marks.`;
}

const greetProps: WelcomeProps = { name: "Shridhar", marks: 85 };

const result=Welcome(greetProps);

console.log(result);