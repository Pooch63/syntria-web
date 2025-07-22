import SlideUpOnScroll from "./slide-up-on-scroll";

export default function Card({ header, content, className }: { header: string; content: string; className?: string; }) {
    return (
        <SlideUpOnScroll className={className}>
            <div className={`bg-light-bg rounded-3xl shadow-xl p-8 flex flex-col h-full border-2 border-dark-bg`}>
                <h2 className="text-2xl font-bold text-dtext mb-4">{header}</h2>
                <p className="text-dtext opacity-80">{content}</p>
            </div>
        </SlideUpOnScroll>
    );
}