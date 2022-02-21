import css from "styled-jsx/css";
import NavBar from "./NavBar";

const style = css`
    .component {
        position: relative;
        margin-top: 120px;
        padding: 0 200px;
    }

    @media screen and (max-width: 1600px) {
      .component {
        padding: 0 100px;
    }
  }
    @media screen and (max-width: 1200px) {
      .component {
        padding: 0 80px;
    }
  }
    @media screen and (max-width: 800px) {
      .component {
        padding: 0 60px;
    }
  }
    @media screen and (max-width: 550px) {
      .component {
        padding: 0 40px;
    }
  }
`;


export default function Layout({ children }){
    return (
      <>
        <NavBar />
        <div className='component'>
          <style jsx>{style}</style>
          {children}
        </div>
      </>
    );
}