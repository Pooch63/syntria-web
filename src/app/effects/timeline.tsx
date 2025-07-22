import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type TimelineElementProps = {
    background: string;
    foreground: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    date?: string;
};

export function TimelineElement({ background, foreground, icon, date, children }: TimelineElementProps) {
    return (
    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background, color: foreground }}
          contentArrowStyle={{ borderRight: `7px solid  ${background}` }}
          date={date}
          iconStyle={{ background, color: foreground }}
          icon={icon}
        >
          {children}
    </VerticalTimelineElement>);
}