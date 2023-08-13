import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          The E-Commerce is a web-based project with two types of users: buyer and seller.  E-commerce web application comes with software integration & their connectivity. Database gathers product data from seller and then  API filter this data and after that, application shows this data in a structured and proper way to buyer with frontend. The web application offers custom dashboard generation for both buyer and seller. It helps in anomaly detection & sends toast notification at least when certain events occur. The web application dashboard have all configurations and features to add products and category of that product very greatly and handle products that deployed at various points by the seller.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
