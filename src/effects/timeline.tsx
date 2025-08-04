import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from "react-vertical-timeline-component";

type TimelineElementProps = {
  background?: string;
  foreground?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
} & VerticalTimelineElementProps;

export function TimelineElement(props: TimelineElementProps) {
  const background = props.background;
  const foreground = props.foreground;
  const children = props.children;

  // Use sensible defaults for background and foreground if not provided
  const contentBg = background || "var(--color-dark-bg)";
  const contentFg = foreground || "var(--color-hcontrast)";
  const iconBg = "var(--color-dark-bg)";
  const iconFg = "var(--color-light-bg)";
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: contentBg, color: contentFg }}
      contentArrowStyle={{ borderRight: `7px solid  ${contentBg}` }}
      iconStyle={{ background: iconBg, color: iconFg }}
      dateClassName="text-center"
      {...props}
    >
      {children}
    </VerticalTimelineElement>
  );
}
