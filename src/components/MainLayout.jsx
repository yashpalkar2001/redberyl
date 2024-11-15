import Header from "../pages/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex">
      <Header />
      <div className="w-full ml-4">
        <section className="flex flex-row ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
