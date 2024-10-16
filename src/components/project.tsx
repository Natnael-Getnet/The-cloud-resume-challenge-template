import React from "react";

const projects = [
  {
    title: "Portfolio Project - Cloud Resume Challenge",
    detail: {
      demo: "",
      services: "AWS S3 Bucket, Cloudfront, Lambda function, Dynamo DB",
      code: "",
      blog: "",
    },
  },
];

const Project = () => {
  return (
    <section className="container mx-auto my-10 px-5">
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/12 mb-5">
          <p className="font-bold text-2xl">Project</p>
        </div>
        <div className="w-full md:w-9/12">
          {projects.map((project, index) => (
            <div key={index} className="mb-5">
              <ul className="list-disc">
                <li className="text-xl font-bold">{project.title}</li>
              </ul>
              <ul className="list-square ml-5 md:ml-10">
                <li>
                  <a href={project.detail.demo} target="_blank">
                    Demo
                  </a>
                </li>
                <li>
                  <b>Services:</b> {project.detail.services}
                </li>
                <li>
                  <a href={project.detail.code} target="_blank">
                    Source Code
                  </a>
                </li>
                <li>
                  <a href={project.detail.blog} target="_blank">
                    Blog Post
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
