import BuyerPopulationPage from "@/components/ValueProp";
import { Target, Zap, Activity, Star } from "lucide-react";

export default function MentalHealth() {
  return <BuyerPopulationPage {...{
    title: "Sports Performance Teams",
    description: "Skylar's Run enhances athletic performance through improved focus, decision-making speed, and cognitive resilience - giving your team the mental edge to win.",
    heroImage: "/images/sports-team-hero.jpg",
    benefits: [
      {
        icon: <Target className="w-16 h-16 text-white" />,
        header: "Enhanced Focus & Concentration",
        subheader: "Improve athletes' ability to maintain focus during high-pressure situations and block out distractions"
      },
      {
        icon: <Zap className="w-16 h-16 text-white" />,
        header: "Faster Decision Making",
        subheader: "Develop split-second decision making abilities crucial for competitive advantage in fast-paced sports"
      },
      {
        icon: <Activity className="w-16 h-16 text-white" />,
        header: "Improved Processing Speed",
        subheader: "Accelerate visual and cognitive processing to react faster to game situations and opponent movements"
      },
      {
        icon: <Star className="w-16 h-16 text-white" />,
        header: "Mental Resilience",
        subheader: "Build cognitive resilience to maintain peak performance under pressure and bounce back from setbacks"
      }
    ],
    story: {
      name: "Coach Thompson",
      story: "Our college football program was struggling with mental mistakes and inconsistent performance under pressure. After integrating Skylar's Run into our training regimen, our players showed remarkable improvement in game-time decision making and maintaining focus during crucial moments.",
      outcome: "Coach Thompson's team saw a 0.09% increase in win percentage, reduced mental errors by 35%, and attracted top recruits impressed by their innovative cognitive training program. Players reported feeling more confident and mentally sharp during games.",
      image: "/images/temp/dr-sarah.jpg"
    },
    cta: {
      header: "Ready to Transform Your Game?",
      subheader: "Join captains and sports enthusiasts boosting stats every single day."
    }
  }}/>;
}