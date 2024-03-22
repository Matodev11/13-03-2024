import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.body.classList.add("notfound-body");

    return () => {
      document.body.classList.remove("notfound-body");
    };
  }, []);

  return (
    <>
      <h1 className="notfound__h1">404 ERROR</h1>
      <p className="notfound__p">
        Page you are looking for had not been found!
      </p>
    </>
  );
};

export default NotFound;
