import css from "styled-jsx/css";
import NavBar from "./NavBar";

const style = css`
    .component {
        position: relative;
        margin-top: 120px;
        padding: 0 50px;
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