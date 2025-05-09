import React from "react";
import FAQcard from "../components/FAQcard";
import IntroCard from "../components/IntroCard";

export default function Featured() {
  const FeaturedDetails = {
    title: "Featured Insights",
    subtitle: "Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.",
     faqs :[
    {
      id: 1,
      question: "How to Protect Your Identity While Traveling?",
    },
    {
      id: 2,
      question: "How to Protect Your Identity While Traveling?",
    },
    {
      id: 3,
      question: "How to Protect Your Identity While Traveling?",
    },
    {
      id: 4,
      question: "How to Protect Your Identity While Traveling?",
    },
    {
      id: 5,
      question: "How to Protect Your Identity While Traveling?",
    }]
  };
 
  return (
    <div className=" flex flex-col  justify-center  items-center ">
    <IntroCard Data={FeaturedDetails}/>
      <div className="mx-auto  space-y-4 text-white">
        {FeaturedDetails.faqs.map((faq) => (
  <FAQcard key={faq.id} faq={faq}/>
        ))}
      </div>
    </div>
  );
}
