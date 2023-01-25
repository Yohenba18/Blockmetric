import React from "react";
import Form from "../../components/FindChain/Investor/Form";
import Layout from "../../components/shared/Layout";

const Investor = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col max-w-7xl mx-auto my-28 gap-16">
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-bold text-yellow-400">
              Welcome Investors
            </div>
            <div className="text-lg">
              Let us help you find your next big investment.
            </div>
          </div>
          <div className="text-3xl font-bold text-yellow-400">
            Please fill the following details, for us to help you the best.
          </div>
          <Form />
        </div>
      </Layout>
    </>
  );
};

export default Investor;
