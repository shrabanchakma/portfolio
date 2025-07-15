import myimage from "../../../../public/me.jpg";
import { GiCheckMark } from "react-icons/gi";
export default function AboutMe() {
  return (
    <section className="max-h-svh px-4 md:px-12  bg-base-100 border-t border-base-300 w-full flex flex-col md:flex-row items-start justify-between">
      <div className="w-2/6 bg-yellow-300">
        {/* skills section */}
        <img src={myimage} alt="My Image" className="w-11/12" />
      </div>
      <div className="w-4/6 bg-green-300 px-10 pt-5 pb-10">
        {/* brief intro and image */}
        <h1 className="text-7xl font-bold">About Me</h1>
        <div className="divider"></div>
        <p className="text-lg text-black/75 mb-6">
          I specialize in turning digital ad budgets into measurable business
          results. With deep expertise in Google Ads and web analytics, I help
          businesses launch performance-driven campaigns and track every click,
          view, and conversion with confidence.
        </p>
        {/* what i do best */}
        <h2 className="text-lg font-bold">What I Do Best</h2>
        <div className="flex flex-col md:flex-row gap-4 mt-4 ">
          <div>
            {" "}
            <ul className="list-none pl-5 text-black/75">
              <li className="flex items-center gap-2">
                <GiCheckMark />
                Google Ads Campaigns
              </li>
              <li>Conversion-Focused Strategy</li>
              <li>Ecommerce Tracking</li>
              <li>Conversion Tracking</li>
              <li>Campaign Optimization</li>
            </ul>
          </div>
          <div>
            {" "}
            <ul className="list-disc pl-5 text-black/75">
              <li>Remarketing & Audience Segments</li>
              <li>Server-Side Tracking</li>
              <li>Custom Dashboards</li>
              <li>Error Fixing & Debugging</li>
              <li>Data-Driven Decisions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
