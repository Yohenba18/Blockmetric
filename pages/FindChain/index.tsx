import React from "react";
import { Form } from "../../components/FindChain/Form";
import Layout from "../../components/shared/Layout";

const FindChain = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col max-w-7xl mx-auto my-28 gap-20">
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-bold text-yellow-400">
              Welcome to Find chain
            </div>
            <div className="text-lg">
              We help you find the right chain according to your requirements.
            </div>
          </div>
          <Form />
        </div>
      </Layout>
    </>
  );
};

export default FindChain;
