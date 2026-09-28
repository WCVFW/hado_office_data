import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const USPArticle: React.FC = () => {
  const benefits = [
    {
      title: "Clear Business Benefit",
      desc: "A strong USP enables your target market to appreciate your offerings for their unique attributes rather than viewing them as a clone of competitors' products, helping them connect with your brand.",
    },
    {
      title: "Potential Revenue Advantage",
      desc: "A distinctive USP prompts prospects to choose you over competitors, increasing revenue potential. It captures the attention of discerning customers willing to pay for high-quality products.",
    },
    {
      title: "Consumer Sentiment and Brand Loyalty",
      desc: "Promoting a strong USP builds positive customer sentiment, encourages repeat purchases, and strengthens loyalty, allowing referral sales and deeper customer engagement.",
    },
    {
      title: "Passionate and Persuasive Sales Approach",
      desc: "A compelling USP empowers your sales team to genuinely convey value, making them more persuasive and confident when approaching prospects.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Unique Selling Proposition - Your Key to Successful Marketing!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg"
        >
          Learn how a strong USP helps your brand stand out, maximize conversions, retain customers, and drive revenue in a competitive market.
        </motion.p>
      </section>

      {/* Article Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
          Boost Your Marketing Approach with an Effective USP
        </h2>
        <p className="mb-6 text-gray-700">
          An articulate USP sets the foundation for your marketing approach because it provides clarity on branding and sales strategies. Your USP communicates the superior value of your products to your target audience and emphasizes how this value is attainable only when they purchase from you.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              <CheckCircle className="text-indigo-600 mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wrapping Up Section */}
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Wrapping Up</h2>
        <p className="mb-6 text-gray-700">
          A clear USP is central to a robust marketing strategy. Well-conceptualized USPs define a brand's products and services, giving it a competitive edge, driving customer loyalty, and boosting revenue. A strong USP also forms the foundation of effective content marketing, enabling your business to stand out across social media, blogs, and video content.
        </p>
        <p className="mb-6 text-gray-700">
          Implementing a USP alongside creative visuals, engaging storytelling, and strategic content ensures your target audience not only sees your offerings but remembers them.
        </p>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl px-8 py-3 text-lg shadow-md">
            Get Expert Guidance on Your USP
          </Button>
        </div>
      </section>
    </div>
  );
};

export default USPArticle;
