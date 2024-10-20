import React from 'react';
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';

function WorkshopCard() {
  return (
    <Card className="mx-auto my-12 w-full max-w-[28rem] md:max-w-[32rem] lg:max-w-[45rem] xl:max-w-[55rem] flex-row bg-neutral-light">
      {' '}
      {/* Neutral light for card background */}
      <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 rounded-r-none">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="font.default" className="mb-4 uppercase">
          {' '}
          {/* Updated color */}
          startups
        </Typography>
        <Typography variant="h4" color="primary.default" className="mb-2">
          {' '}
          {/* Primary default for title */}
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="neutral.default" className="mb-8 font-normal">
          {' '}
          {/* Neutral default for body text */}
          Like so many organizations these days, Autodesk is a company in transition. It was until
          recently a traditional boxed software company selling licenses. Yet its own business model
          disruption is only part of the story.
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2 text-secondary.default">
            {' '}
            {/* Secondary default for button text */}
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default WorkshopCard;
