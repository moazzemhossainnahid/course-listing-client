import { Link } from "react-router-dom";

interface PageBannerProps {
    title: string;
    path: string;
    pathTitle: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, path, pathTitle }) => {
    return (
        <div
            className="w-full h-[26vh] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: "url(https://wallpapers.com/images/hd/banner-background-b5a2ptzqzslvvuvv.jpg)" }}
        >
            <div className="h-full w-full bg-primary bg-opacity-30 flex flex-col justify-center items-center">
                <h1 className="text-xl lg:text-4xl text-white font-bold">{title}</h1>
                <p className="mt-1 md:mt-2 text-sm text-white"><Link to={"/"} className="hover:underline">Home</Link> / <Link to={path} className="hover:underline">{pathTitle}</Link></p>
            </div>
        </div>
    );
};

export default PageBanner;
