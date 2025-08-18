import BuyerPopulationPage from "@/components/ValueProp";
import { Shield, TrendingUp, Heart, Users } from "lucide-react";

export default function MentalHealth() {
  return (
    <BuyerPopulationPage
      {...{
        title: "Mental Health Treatment Centers",
        description:
          "Skylar's Run addresses the root cause of 18 out of 20 common psychiatric conditions - attention deficits - with proven results in reducing anxiety, depression, and substance abuse.",
        heroNumber: 5.2,
        heroImage: "/images/temp/mental-health.jpg",
        benefits: [
          {
            icon: <Shield className="w-16 h-16 text-white" />,
            header: "Treats 18/20 Psychiatric Conditions",
            subheader:
              "Address the underlying attention deficits that contribute to most mental health disorders with one evidence-based tool",
          },
          {
            icon: <TrendingUp className="w-16 h-16 text-white" />,
            header: "44% Depression Reduction",
            subheader:
              "Achieve significant improvements in depression symptoms through targeted cognitive training and engagement",
          },
          {
            icon: <Heart className="w-16 h-16 text-white" />,
            header: "22% Anxiety Reduction",
            subheader:
              "Help patients develop better emotional regulation and stress management through improved cognitive control",
          },
          {
            icon: <Users className="w-16 h-16 text-white" />,
            header: "3x Reduced Substance Abuse Risk",
            subheader:
              "Lower relapse rates by strengthening cognitive inhibition and self-regulation skills critical for recovery",
          },
        ],
        story: {
          name: "Dr. Michael Santos",
          story:
            "Running a mental health clinic, I was seeing the same patients cycle through traditional therapies without lasting change. Skylar's Run gave us a breakthrough tool that addresses the cognitive deficits underlying most psychiatric conditions. Patients are more engaged and showing real, measurable progress.",
          outcome:
            "Dr. Santos' clinic reduced patient readmission rates by 35%, increased treatment completion rates by 60%, and expanded to serve 200 more patients annually. The clinic became a regional referral center for innovative mental health treatment.",
          image: "/images/temp/dr-sarah.jpg",
        },
        cta: {
          header: "Ready to Transform Your Practice?",
          subheader:
            "Join thousands of professionals who are already using Skylar's Run to improve patient outcomes.",
        },
      }}
    />
  );
}
