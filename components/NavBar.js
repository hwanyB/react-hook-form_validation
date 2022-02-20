import Link from "next/link";
import css from "styled-jsx/css"
import { useRouter } from "next/router";


const style = css`
    nav {
        position: fixed;
        top: 0;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        width: 100%;
        align-items: center;
        padding: 30px 50px;
        box-sizing: border-box;
        box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
        z-index: 99;
        background-color: #fff;
    }
    a {
        font-size: 13px;
        font-weight: 300;
        color: gray;
    }
    .active {
        color: black;
        font-weight: 500;
    }
`;


export default function NavBar(){
    const router = useRouter().pathname;
    return (
      <nav>
        <Link href='/'>
          <a className={router === "/" ? "active" : ""}>HOME</a>
        </Link>
        <Link href='/about'>
          <a className={router === "/about" ? "active" : ""}>ABOUT</a>
        </Link>
        <style jsx>{style}</style>
      </nav>
    );
}