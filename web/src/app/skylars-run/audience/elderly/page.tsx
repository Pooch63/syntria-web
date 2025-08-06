import BuyerPopulationPage from "@/components/ValueProp";
import { DollarSign, Users, Home, Brain } from "lucide-react";

export default function MentalHealth() {
  return <BuyerPopulationPage {...{
    title: "Nursing Home Management",
    description: "Skylar's Run delivers $3,280 ROI per user through reduced staff turnover, increased billable hours, and improved cognitive outcomes for elderly residents.",
    heroImage: "/images/nursing-home-hero.jpg",
    benefits: [
      {
        icon: <DollarSign className="w-16 h-16 text-white" />,
        header: "$60K Revenue Share",
        subheader: "Generate significant additional revenue through improved resident outcomes and enhanced care quality metrics"
      },
      {
        icon: <Users className="w-16 h-16 text-white" />,
        header: "10% Staff Turnover Reduction",
        subheader: "Reduce costly staff turnover by improving resident engagement and creating a more positive care environment"
      },
      {
        icon: <Home className="w-16 h-16 text-white" />,
        header: "1% Occupancy Improvement",
        subheader: "Attract more families with innovative cognitive care programs that demonstrate measurable resident improvements"
      },
      {
        icon: <Brain className="w-16 h-16 text-white" />,
        header: "Delayed Cognitive Decline",
        subheader: "Help residents maintain independence longer with proven cognitive training that delays onset of dementia symptoms"
      }
    ],
    story: {
      name: "Maria Rodriguez",
      story: "As a nursing home administrator, I was struggling with high staff turnover and families questioning our care quality. After implementing Skylar's Run, our residents became more engaged, staff felt more fulfilled seeing real progress, and we've had a waiting list for the first time in years.",
      outcome: "Maria's facility saw a 15% reduction in staff turnover, $60,000 in additional revenue sharing, and received the highest family satisfaction scores in their network. Residents showed measurable improvements in daily living activities and cognitive function.",
      image: "/images/temp/dr-sarah.jpg"
    },
    cta: {
      header: "Ready to Make Older Folks Feel Young Again?",
      subheader: "Join carers and assistance providers improving their patients' quality of life."
    }
  }}/>;
}