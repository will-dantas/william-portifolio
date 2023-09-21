import { ITimeLine } from "./TimeLine.interface"
import { TimelineContent, TimelineItem } from "./TimeLine.styles"

export const Timeline = ({
  monthInitial,
  monthFinal,
  yearInitial,
  yearFinal = 'Presente',
  title,
  description
}: ITimeLine) => {

  return (
    <TimelineItem>
      <TimelineContent>
        <small>{monthInitial} <strong>{yearInitial}</strong> - {monthFinal} <strong>{yearFinal}</strong></small>
        <h3>{title}</h3>
        <p>{description}</p>
      </TimelineContent>
    </TimelineItem>
  )
}
