import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function PitchDeck() {
  const pricing: PricingPlan[] = [
    {
      name: "Lite",
      priceLabel: "₹14,999",
      bullets: ["Deck outline", "Design template", "Two revisions"],
    },
    {
      name: "Standard",
      priceLabel: "₹29,999",
      highlight: true,
      bullets: ["Everything in Lite", "Custom design", "Four revisions"],
    },
    {
      name: "Premium",
      priceLabel: "₹49,999",
      bullets: [
        "Everything in Standard",
        "Narrative workshop",
        "Investor review pass",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Investment Pitch Deck - Overview",
      paragraphs: [
        "An investment pitch deck is a presentation used by startups to raise capital from investors. It typically includes 10-15 slides that outline the company's problem, solution, market opportunity, team, traction, financials, and funding needs.",
        "The pitch deck should be tailored to the audience. For example, angel investors focus on potential returns, while VCs focus on scalability.",
        "A business pitch summarizes the key points of your investment pitch deck and introduces your company to potential investors.",
      ],
    },
    {
      kind: "list",
      title: "Advantages of an Investor Pitch",
      items: [
        "Convince the Investors – Showcase your startup’s potential in a clear and professional presentation.",
        "Equity Funding – Present a compelling story to secure funding rounds and act as a marketing strategy.",
        "Build the Roadmap – Serve as an internal memo to track benchmarks, progress, and adjust goals.",
      ],
    },
    {
      kind: "list",
      title: "Contents of a Business Pitch Deck",
      items: [
        "Elevator Pitch – Quick summary of your startup and problem solved.",
        "Solution – Your product or service addressing the problem.",
        "Market Analysis – Insights and potential opportunities in the market.",
        "USP – Why your business is different and will succeed.",
        "Business Model – Revenue generation and growth strategy.",
        "Go-To-Market Strategy – Plan to acquire customers and scale.",
        "Current Traction – Key metrics, milestones, and customer acquisition.",
        "Founding Team – Expertise, experience, and key advisors.",
      ],
    },
    {
      kind: "list",
      title: "Creating a Compelling Pitch Deck",
      items: [
        "Define Company's Purpose and Business Model – Clearly articulate the problem, solution, and business model.",
        "Identify Target Market – Define customer segments and quantify market size.",
        "Present Team Expertise – Highlight relevant experience and execution capability.",
        "Show Traction – Demonstrate progress with milestones and partnerships.",
        "Project Financials and Funding Needs – Present realistic forecasts and fund utilization.",
        "Craft Narrative and Design – Use visuals effectively with charts, graphs, and images.",
        "Seek Expert Feedback – Refine presentation with guidance from experienced designers.",
      ],
    },
    {
      kind: "list",
      title: "Required Paperwork for an Investor Deck",
      items: [
        "Enterprise Plan – Document objectives and strategies.",
        "Technical Documents – Relevant tech or medical venture details.",
        "Financial Documents – Forecasts, P&L, and profit/loss statements.",
        "Additional Documents – Hiring, payroll, R&D, manufacturing, and marketing plans.",
        "Market Information – Data to help investors understand target audience.",
      ],
    },
    {
      kind: "list",
      title: "Pitch Deck Building Process",
      items: [
        "5 Working Days – Share startup data for in-depth analysis of business and competitors.",
        "10 Working Days – Rough draft of pitch deck shared for feedback.",
        "4 Working Days – Iterations requested by startup are incorporated.",
      ],
    },
    {
      kind: "list",
      title: "Our Services",
      items: [
        "Pitch Deck Creation – Professional, compelling presentations.",
        "Investor Pitch Coaching – Hone presentation skills and confidence.",
        "Investor Connect – Connect to potential investors and partners.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch for Your Investment Pitch Deck?",
      items: [
        "Unmatched Expertise – Experienced team with deep understanding of pitch decks.",
        "Tailored Pitch Decks – Custom decks reflecting your startup’s potential.",
        "Investor Coaching – Guidance to deliver a compelling presentation.",
        "Proven Track Record – Helped numerous startups secure funding.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Investment Pitch Deck",
      qa: [
        {
          q: "What should be included in my investment pitch deck?",
          a: "Slides outlining problem, solution, market, team, traction, financials, and funding needs.",
        },
        {
          q: "How long should my investment pitch deck be?",
          a: "Typically 10-15 slides for clarity and conciseness.",
        },
        {
          q: "How do you make a winning investor pitch deck?",
          a: "Tailor the deck to the audience, use visuals, clearly articulate the value proposition, and refine with expert feedback.",
        },
        {
          q: "What is the difference between an investment pitch deck and a business plan?",
          a: "A pitch deck is a visual, concise presentation; a business plan is a detailed written document.",
        },
        {
          q: "How much does it cost to create an investment pitch deck?",
          a: "Costs vary by complexity and revisions; our packages range from Lite to Premium.",
        },
        {
          q: "How can I find a reputable investment pitch deck creator?",
          a: "Look for experienced teams with proven track record, testimonials, and tailored services.",
        },
        {
          q: "What documents help you set up a business pitch deck?",
          a: "Enterprise plan, technical documents, financial forecasts, and market analysis.",
        },
        {
          q: "What information/data points help build up an investment pitch deck?",
          a: "Market size, customer segments, revenue model, traction, and team credentials.",
        },
        {
          q: "What are the steps to have a good business pitch deck?",
          a: "Define purpose, analyze market, present team, highlight traction, project financials, craft narrative, seek feedback.",
        },
        {
          q: "What are the points to be included in the investment pitch deck?",
          a: "Problem, solution, market opportunity, team, traction, business model, financials, funding needs.",
        },
        {
          q: "What are the tips to convince a client to invest?",
          a: "Clear problem-solution presentation, market potential, strong team, realistic financials, and credibility.",
        },
        {
          q: "How long will the business pitch last?",
          a: "Typically 10-20 minutes depending on depth and audience.",
        },
        {
          q: "What is an investment pitch deck template?",
          a: "A pre-designed format to organize slides and content effectively.",
        },
        {
          q: "What should be in a pitch deck?",
          a: "Problem, solution, market, team, traction, business model, financials, and funding needs.",
        },
        {
          q: "What do investors want in a pitch deck?",
          a: "Clarity, scalability, traction, credible team, and realistic financials.",
        },
        {
          q: "How to create a business pitch for investors?",
          a: "Research, structure content, design slides, and practice delivery.",
        },
        {
          q: "How do you start a pitch?",
          a: "Introduce your company, state the problem, and outline your solution clearly.",
        },
        {
          q: "What is the purpose of a pitch deck?",
          a: "To attract investors, secure funding, and communicate your business potential clearly.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      variant="professional"
      title="Investment Pitch Deck for Business"
      subtitle="Get a compelling, investor-ready pitch deck tailored to your startup."
      serviceLabel="Pitch Deck"
      pricing={pricing}
      sections={sections}
      serviceKey="pitch-deck"
    />
  );
}
