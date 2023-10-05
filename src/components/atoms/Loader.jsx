import loaderGif from "../../assets/media/loader.gif";

export default function Loader() {
    return (
        <div className="loader-container">
            <img src={loaderGif} alt="loader-image" />
        </div>
    );
}