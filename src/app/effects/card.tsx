import SlideUpOnScroll from "./slide-up-on-scroll";

export default function Card({ header, content, className }: { header: string; content: string; className?: string; }) {
    return (
        <SlideUpOnScroll className={className}>
            <div className={`bg-white rounded-3xl shadow-xl p-8 flex flex-col h-full`}>
                <h2 className="text-2xl font-bold text-emerald-700 mb-4">{header}</h2>
                <p className="text-gray-700 opacity-80">{content}</p>
            </div>
        </SlideUpOnScroll>
    );
}