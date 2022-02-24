import Meta from "./meta";
export const Layout = ({ children }) => {
  return (
    <>

      <div>
        <main>{children}</main>
      </div>

    </>
  );
};
export default Layout;
