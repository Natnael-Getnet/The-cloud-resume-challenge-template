import React from "react";

const experiences = [
  {
    company: "Company 1",
    title: "Software Engineer Intern",
    location: "location",
    startDate: "October 2020",
    endDate: "January 2021",
    achievments: [
      "lorem Ipsum",
      "lorem Ipsum",
      "lorem Ipsum",
      "lorem Ipsum",
      "lorem Ipsum",
    ],
  },
  {
    company: "Company 2",
    title: "Software Engineer",
    location: "Location",
    startDate: "November 2021",
    endDate: "April 2024",
    achievments: [
      "lorem Ipsum",
      "lorem Ipsum",
      "lorem Ipsum",
      "lorem Ipsum",
      "lorem Ipsum",
      "lorem Ipsum",
    ],
  },
];

const Experience = () => {
  return (
    <section className="container my-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:basis-3/12">
          <p className="font-bold text-2xl">Experience</p>
        </div>
        <div className="md:basis-9/12">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-5">
              <p className="text-xl font-bold">{experience.title}</p>
              <p>{experience.company}</p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
              <ul className="list-disc ml-5">
                {experience.achievments.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
