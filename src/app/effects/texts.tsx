export function Header({ text }: { text: string }) {
    return (
        <h1 className="slide-up text-5xl font-extrabold mb-6 text-dtext drop-shadow montserrat">{text}</h1>
    );
}