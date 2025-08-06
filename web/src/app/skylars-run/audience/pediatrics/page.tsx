import BuyerPopulationPage from "@/components/ValueProp";
import { Baby, Brain, Heart, UserCheck } from "lucide-react";

export default function MentalHealth() {
  return <BuyerPopulationPage {...{
    title: "Pediatric Medical Practices",
    description: "Transform your pediatric practice with Skylar's Run - delivering 83% improvement in academic performance and 50% reduction in ADHD classifications for your young patients.",
    heroNumber: 1.13,
    benefits: [
      {
        icon: <Baby className="w-16 h-16 text-white" />,
        header: "83% Academic Improvement",
        subheader: "Help children achieve grade-level advancement in math and reading fluency through targeted cognitive training"
      },
      {
        icon: <Brain className="w-16 h-16 text-white" />,
        header: "50% ADHD Reduction",
        subheader: "Reduce ADHD symptom severity with clinically proven results comparable to prescription medications"
      },
      {
        icon: <Heart className="w-16 h-16 text-white" />,
        header: "65% Fewer Homework Problems",
        subheader: "Improve family dynamics by significantly reducing homework-related conflicts and behavioral issues"
      },
      {
        icon: <UserCheck className="w-16 h-16 text-white" />,
        header: "Sustained Long-term Results",
        subheader: "Provide lasting cognitive improvements that persist 3-5 months after training completion"
      }
    ],
    story: {
      name: "Dr. Amanda Chen",
      story: "I was seeing too many children struggling with attention and academic performance, and parents were desperate for alternatives to medication. Skylar's Run gave me an evidence-based tool that actually works - my patients love the game format and parents are amazed by the real-world improvements.",
      outcome: "Dr. Chen's practice became known as the innovative pediatric clinic in her area. She saw 40% more referrals, reduced medication prescriptions by 30%, and achieved 95% parent satisfaction scores. Children showed measurable improvements in both clinical assessments and school performance.",
      image: "/images/temp/dr-sarah.jpg"
    },
    cta: {
      header: "Ready to Transform Your Patients?",
      subheader: "Join doctors and childcare experts improving their charges' minds and potential."
    }
  }}/>;
};