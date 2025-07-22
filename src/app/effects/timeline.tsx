import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type TimelineElementProps = {
    background?: string;
    foreground?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    date?: string;
};

export function TimelineElement({ background, foreground, icon, date, children }: TimelineElementProps) {
    // Use sensible defaults for background and foreground if not provided
    const contentBg = background || 'var(--color-dark-bg)';
    const contentFg = foreground || 'var(--color-hcontrast)';
    const iconBg = 'var(--color-dark-bg)';
    const iconFg = 'var(--color-light-bg)';
    return (
    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: contentBg, color: contentFg }}
          contentArrowStyle={{ borderRight: `7px solid  ${contentBg}` }}
          date={date}
          iconStyle={{ background: iconBg, color: iconFg }}
          icon={icon}
        >
          {children}
    </VerticalTimelineElement>);
}