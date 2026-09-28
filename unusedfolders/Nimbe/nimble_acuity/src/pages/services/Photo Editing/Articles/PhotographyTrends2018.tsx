import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotographyTrends2018: React.FC = () => {
  const trends = [
    {
      title: "Image Sharing with Bluetooth will Lead the Way",
      content: `Instagram has conquered the world of social media... 
      Sharing photos via Bluetooth is an upcoming trend in photography to watch in 2018 because it is fast, convenient, and niggle-free.`,
    },
    {
      title: "Smart Image Editing with Artificial Intelligence Will Streamline Post Processing",
      content: `There is a growing demand for retouched images... 
      Adobe’s Photoshop and Lightroom are already leveraging AI for smart cropping and auto-tagging.`,
    },
    {
      title: "The Film and Camera Will Make A Come Back",
      content: `Film photography is making a comeback, thanks to Generation X... 
      By the end of 2018 more 35mm still cameras and SLRs are expected to see the light of day.`,
    },
    {
      title: "Electronic Shutter Will Lead to Silky Smooth Stable Photographs",
      content: `Electronic shutters proved to be an ultimate success in snapping pictures at blazing speeds... 
      It has fully eliminated traditional shutter sound along with shutter-induced camera shake in images.`,
    },
    {
      title: "Confronting Image Plagiarism with Blockchain",
      content: `Image theft is a major concern... 
      Blockchain enables photographers to authenticate original work, making copyright protection easier.`,
    },
  ];

  return (
    <div> <PEMainMenu/>
    <div className="max-w-4xl mx-auto px-6 py-10">
       
      <h1 className="text-3xl font-bold mb-6">
        5 Most Awaited Photography Trends in 2018
      </h1>
      <p className="mb-6 text-gray-700">
        Though we are already in the second quarter of the year, our round-up of Photography trends 
        is still fresh as we speculate on where the industry might be headed in 2018...
      </p>

      <h2 className="text-2xl font-semibold mb-4">5 Upcoming Photography Trends in 2018</h2>

      <div className="space-y-6">
        {trends.map((trend, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
            <p className="text-gray-700">{trend.content}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">The Verdict</h2>
      <p className="text-gray-700 mb-6">
        Our compilation of 5 most awaited photography trends is based on the direction we are headed in 2018...
      </p>

      <div className="bg-gray-100 p-6 rounded-lg mt-6">
        <h3 className="text-lg font-semibold mb-2">
          Give Photographs a Refreshing Appeal with the Latest Photography Trends from Nimble Acuity
        </h3>
        <p className="text-gray-700 mb-4">
          Nimble Acuity is a well-established outsourcing company that offers cost-effective and reliable 
          image enhancement services. We rely on the expertise of our skilled image editors to give your 
          photographs a radical makeover...
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </div>
    </div>
  );
};

export default PhotographyTrends2018;
