import { ReactNode } from "react";


type Props = {
    children: ReactNode;
  };
  


const Loader = ({children}:Props) => {
    return (
        <>
          <section className="section">
            <div className="loader">
              {[...Array(20)].map((_, index) => (
                <span key={index} style={{ ['--i' as string]: index + 1 }}></span>
              ))}
            </div>
          </section>
          {children}
        </>
      );
    };
 

export default Loader;