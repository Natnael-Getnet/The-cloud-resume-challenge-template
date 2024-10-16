const certifications = [
  {
    name: "Certificate 1",
    link: "",
  },
  {
    name: "Certificate 2",
    link: "",
  },
  {
    name: "Certificate 3",
    link: "",
  },
  {
    name: "Certificate 4",
    link: "",
  },
];

const Certification = () => {
  return (
    <section className="container my-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:basis-3/12">
          <p className="font-bold text-2xl">Certification</p>
        </div>
        <div className="md:basis-9/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((certification, index) => (
              <a key={index} href={certification.link} className="underline">
                {certification.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
