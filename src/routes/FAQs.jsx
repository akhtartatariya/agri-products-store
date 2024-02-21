import React, { useState } from "react";

import { Link } from "react-router-dom";

function FAQs() {
  const [answers, setAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
    question10: false,
    question11: false,
    question12: false,
    question13: false,
    question14: false,
    question15: false,
    question16: false,
    question17: false,
    question18: false,
    question19: false,
  });

  const toggleAnswer = (question) => {
    setAnswers((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Frequently Asked Questions (FAQs)
      </div>
      <div className="px-[40px] m-[0_auto]">
        <div className="ml-[-30px]">
          <div className="relative md:left-[8.33333%] md:w-[83.33333%] float-left pl-[30px] ">
            <div className="bg-[url('../public/img/hero_faq.webp')] mx-[calc(-50vw_+_50.8145%)] min-h-[310px] mb-[30px] md:pt-[104px] bg-center bg-cover bg-no-repeat"></div>
            <div className="m-[0_0_30px]">
              <h1 className="mt-0 text-[56px] leading-[60px] max-[981px]:text-[40px] max-[981px]:leading-[42px] font-bold m-[20px_0]">
                Frequent questions
              </h1>
            </div>
            {/* Customer Account */}
            <h3 className="mt-[55px] mb-[27.5px] transform-none text-left text-3xl font-bold max-[981px]:text-2xl">
              Customer account
            </h3>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question1 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question1")}
              >
                <span className="text-[#0072ce]">
                  Do I need a free Corteva account to shop online?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question1 ? "block" : "hidden"
                } `}
              >
                <p>
                  Yes, it is necessary to be registered to be able to purchase
                  in our online store. Click here to create your Corteva account
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question2 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question2")}
              >
                <span className="text-[#0072ce]">
                  How can I register to buy online at Corteva Spain?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question2 ? "block" : "hidden"
                } `}
              >
                <p>
                  To register in the Corteva online store, create a user account
                  here. Once your order is placed, we will automatically create
                  your customer account for the rest of Corteva services.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question3 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question3")}
              >
                <span className="text-[#0072ce]">How can I buy online?</span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question3 ? "block" : "hidden"
                } `}
              >
                <p>
                  In the Corteva online store you can browse the catalog and add
                  products to your basket. At this time we can only offer a
                  limited range of products. Please contact our customer service
                  center to request any additional products.
                </p>
              </div>
            </div>
            {/* Orders */}
            <h3 className="mt-[55px] mb-[27.5px] transform-none text-left text-3xl font-bold max-[981px]:text-2xl">
              Orders
            </h3>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question4 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question4")}
              >
                <span className="text-[#0072ce]">Can I repeat an order?</span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question4 ? "block" : "hidden"
                } `}
              >
                <p>
                  Yes. In the My Account section of our online store you can see
                  previous orders and repeat them if you wish.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question5 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question5")}
              >
                <span className="text-[#0072ce]">
                  How can I modify or cancel my order?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question5 ? "block" : "hidden"
                } `}
              >
                <p>
                  Please contact our customer service center and we will assist
                  you as soon as possible.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question6 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question6")}
              >
                <span className="text-[#0072ce]">
                  Can I check online for orders placed by phone, email or fax?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question6 ? "block" : "hidden"
                } `}
              >
                <p>
                  At this time you can only view orders that have been placed in
                  the online store.
                </p>
              </div>
            </div>
            {/* User account */}
            <h3 className="mt-[55px] mb-[27.5px] transform-none text-left text-3xl font-bold max-[981px]:text-2xl">
              User account
            </h3>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question7 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question7")}
              >
                <span className="text-[#0072ce]">
                  Can I change the email address I log in with?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question7 ? "block" : "hidden"
                } `}
              >
                <p>
                  Yes of course!. Go to your user profile here and make any
                  changes you want.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question8 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question8")}
              >
                <span className="text-[#0072ce]">
                  How can I change my password?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question8 ? "block" : "hidden"
                } `}
              >
                <p>
                  Please go to your User Profile and select Change Password. You
                  can do it with this link.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question9 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question9")}
              >
                <span className="text-[#0072ce]">
                  I forgot my password. What I can do?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question9 ? "block" : "hidden"
                } `}
              >
                <p>Reset your password here.</p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question10 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question10")}
              >
                <span className="text-[#0072ce]">
                  How can I change my contact details and preferences?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question10 ? "block" : "hidden"
                } `}
              >
                <p>
                  You can change your contact information in your user profile.
                  You just have to follow this link.
                </p>
              </div>
            </div>
            {/* Pay */}
            <h3 className="mt-[55px] mb-[27.5px] transform-none text-left text-3xl font-bold max-[981px]:text-2xl">
              Pay
            </h3>

            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question11 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question11")}
              >
                <span className="text-[#0072ce]">
                  What payment methods do we offer in the online store?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question11 ? "block" : "hidden"
                } `}
              >
                <p>
                  At this time we can only offer payment by credit/debit card in
                  our online store.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question12 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question12")}
              >
                <span className="text-[#0072ce]">Is my payment secure?</span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question12 ? "block" : "hidden"
                } `}
              >
                <p>
                  Yes, all transactions are secured by current national,
                  European and international regulations following Corteva's
                  highest security and commitment standards.
                </p>
              </div>
            </div>
            {/* Delivery */}
            <h3 className="mt-[55px] mb-[27.5px] transform-none text-left text-3xl font-bold max-[981px]:text-2xl">
              Delivery
            </h3>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question13 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question13")}
              >
                <span className="text-[#0072ce]">
                  When will my order be delivered?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question13 ? "block" : "hidden"
                } `}
              >
                <p>
                  In general, our goal is to deliver your order within 48 hours,
                  although this may vary depending on various factors external
                  to us.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question14 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question14")}
              >
                <span className="text-[#0072ce]">
                  Does my order have shipping costs?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question14 ? "block" : "hidden"
                } `}
              >
                <p>
                  At the moment, we do not charge shipping costs, as we want you
                  to be a part of the experience of our online store. In the
                  future, we will work to make these as tight as possible.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question15 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question15")}
              >
                <span className="text-[#0072ce]">
                  How can I check the status of my order?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question15 ? "block" : "hidden"
                } `}
              >
                <p>
                  You can check the status of your order in your User Account.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question16 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question16")}
              >
                <span className="text-[#0072ce]">
                  Can I modify the delivery details of my order?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question16 ? "block" : "hidden"
                } `}
              >
                <p>
                  Please contact our customer service center for any changes
                  after you have placed your order.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question17 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question17")}
              >
                <span className="text-[#0072ce]">
                  Can orders be delivered outside of Spain?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question17 ? "block" : "hidden"
                } `}
              >
                <p>Currently we cannot deliver orders outside of Spain.</p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question18 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question18")}
              >
                <span className="text-[#0072ce]">
                  Can I request an express delivery?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question18 ? "block" : "hidden"
                } `}
              >
                <p>
                  We aim to deliver all orders within 48 hours. For now, we
                  cannot offer you a shorter delivery time.
                </p>
              </div>
            </div>
            <div className="mb-[0.9em] [border-bottom:1px_solid_rgb(200,_207,_213)] p-[0_0_12px]">
              <h3
                className={`mb-[0.2em] relative p-[5px_0] pr-[30px] cursor-pointer text-xl max-[590px]:text-base font-bold before:[content:''] before:w-[18px] before:h-[18px] before:block before:absolute before:right-0 before:top-[9px] before:[background:url('../public/img/bl-arrow.svg')_center/auto_no-repeat] before:[transition:transform_0.1s_ease-out] before:rounded-[100%] before:[border:2px_solid_#0072ce] ${
                  answers.question19 && "before:rotate-180"
                } `}
                onClick={() => toggleAnswer("question19")}
              >
                <span className="text-[#0072ce]">
                  An item is missing or incorrect from my order. What should I
                  do?
                </span>
              </h3>
              <div
                className={`p-[5px_0] font-medium ${
                  answers.question19 ? "block" : "hidden"
                } `}
              >
                <p>
                  Please contact our customer service center and we will assist
                  you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
