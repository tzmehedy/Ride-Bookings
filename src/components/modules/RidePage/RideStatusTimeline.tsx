import {
  Timeline,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"
import { RideTimelineItems } from "@/constants/ride"


interface RideStatusTimelineProps {
  defaultValueIndex: number
}


export default function RideStatusTimeline({ defaultValueIndex }: RideStatusTimelineProps) {
  console.log(defaultValueIndex)
  
  return (
    <Timeline defaultValue={defaultValueIndex}  orientation="horizontal">
      {RideTimelineItems.map((item, index) => (
        <TimelineItem  key={index} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
