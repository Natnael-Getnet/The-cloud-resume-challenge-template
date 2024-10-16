import React from "react";

const educations = [
  {
    institution: "University Name",
    award: "BSc in ",
    startDate: "October 2016",
    endDate: "September 2021",
  },
];

const Education = () => {
  return (
    <section className="container mx-auto my-10 px-5">
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/12 mb-5">
          <p className="font-bold text-2xl">Education</p>
        </div>
        <div className="w-full md:w-9/12">
          {educations.map((education, index) => (
            <div key={index} className="mb-5">
              <p className="text-xl font-bold">{education.award}</p>
              <p>{education.institution}</p>
              <p>
                {education.startDate} - {education.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
