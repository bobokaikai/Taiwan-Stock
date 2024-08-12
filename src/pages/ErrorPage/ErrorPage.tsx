import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import error_page_bg from "../../assets/error_page_bg.svg"
import { FaLocationArrow } from "react-icons/fa6";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="w-full h-[100vh] grid place-items-center bg-[#020817]">
            <div className="content_wrap flex flex-row items-center justify-center gap-10">
                <img src={error_page_bg} className="w-[30%] h-[30%]" />
                <div className="context text-[#fff] flex flex-col gap-3">
                    <h1 className="text-3xl">Oops!</h1>
                    <p className="text-xl font-semibold">Sorry, an unexpected error has occurred.</p>
                    <p className="text-xl font-semibold">
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <NavLink to={"/"} className="animate-bounce animate-infinite text-blue-300 font-bold underline underline-offset-8" >Back To Home <FaLocationArrow className="inline-block" /></NavLink>
                </div>
            </div>
        </div>
    );
}