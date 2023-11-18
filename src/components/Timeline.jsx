import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
   
  export function DefaultTimeline({details}) {
    return (
      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                {details.desq}
              </Typography>
            </TimelineBody>
          </TimelineItem>
            {/* <TimelineConnector /> */}
        </Timeline>
      </div>
    );
  }
  