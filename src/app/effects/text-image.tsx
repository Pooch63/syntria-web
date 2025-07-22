export default function TextImage({ title, reverse, text, image }: {
    title: string;
    reverse: boolean;
    text: string;
    image: string;
}) {
    return (
    <section
        key={title}
        className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center max-w-6xl mx-auto px-4 md:space-x-12 md:space-x-reverse-12`}
      >
        {/* Gradient Border Section with Transparent Background */}
        <div className="flex-1 z-10">
          <div className="rounded-3xl bg-gradient-to-r from-ltrans to-rtrans p-[2px] mb-6 md:mb-0 shadow-xl">
            <div className="rounded-[calc(1.5rem-2px)] bg-light-bg p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500 drop-shadow">{title}</h2>
              <p className="text-lg md:text-xl opacity-90 text-gray-500">{text}</p>
            </div>
          </div>
        </div>
        {/* Image Side */}
        <div className="flex-1 flex justify-center items-center min-h-[300px]">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="relative w-56 h-56 md:w-72 md:h-72 object-contain opacity-95 drop-shadow-xl z-10"
            />
          </div>
        </div>
      </section>
    );
}