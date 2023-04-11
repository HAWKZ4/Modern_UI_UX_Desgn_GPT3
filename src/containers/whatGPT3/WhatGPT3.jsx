import React from "react";
import { Feature } from "../../components";
import "./whatgpt3.css";

const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. We are creative and make the impossible possible we have no limit and we are rich with new technology "
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Expolore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
          "
          title="Knowledgebase"
        />
        <Feature
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
        "
          title="Education"
        />
      </div>
    </div>
  );
};

export default Whatgpt3;
