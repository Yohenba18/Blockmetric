import React from "react";
import Form from "../../components/FindChain/Enthusiasts/Form";
import Layout from "../../components/shared/Layout";

const Enthusiast = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col max-w-7xl mx-auto my-28 gap-16">
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-bold text-yellow-400">
              Welcome Enthusiasts
            </div>
            <div className="text-lg">
              We will help you to choose the best chain you can start you web3
              journey with.
            </div>
          </div>
          <div className="text-3xl font-bold text-yellow-400">
            Please fill the following details, for us to help you the best
          </div>
          <Form />
        </div>
      </Layout>
    </>
  );
};

export default Enthusiast;
