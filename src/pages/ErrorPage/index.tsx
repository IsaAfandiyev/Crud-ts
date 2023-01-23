import {Link, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const err: any = useRouteError();
    console.error(err);

    return (
        <div id="error-page">
            <h1>Salam qaqash</h1>
            <p>errorun var hechne eleye bilmirem sorry )</p>
            <p>
                <i>{err.statusText || err.message}</i>
            </p>
            <button>
                <Link to={`/`}>Back</Link>
            </button>
        </div>
    );
}