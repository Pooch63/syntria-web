import SlideUpOnScroll from "./slide-up-on-scroll";

export default function FeatureCard({
  title,
  text,
  icon: Icon,
  index,
}: {
  title: string;
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  index: number;
}) {
  return (
    <SlideUpOnScroll
      className="transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="h-full bg-hcontrast backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 group hover:border-purple-200">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{text}</p>
          </div>
        </div>
      </div>
    </SlideUpOnScroll>
  );
}
