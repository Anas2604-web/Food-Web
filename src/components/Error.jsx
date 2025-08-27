import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
        <h1>Oops! Something went wrong.</h1>
        <h2>{ err.error.message}</h2>
        <p>We couldn't find the page you were looking for.</p>
        <p>Please check the URL or return to the homepage.</p>
        </div>
    );
    }

export default Error;
 