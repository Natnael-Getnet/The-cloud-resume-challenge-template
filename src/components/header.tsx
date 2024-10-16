import VisitorsCount from "./visitors-count";

const Header = () => {
  return (
    <header className="text-center mt-5 mb-12">
      <h1 className="text-4xl font-bold">Full name </h1>
      <p className="text-lg mt-2">Software Engineer | Cloud Enthusiast</p>
      <VisitorsCount />
    </header>
  );
};

export default Header;
