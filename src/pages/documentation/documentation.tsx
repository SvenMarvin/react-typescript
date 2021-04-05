import React, { useState, useEffect } from "react";
import "./documentation.scss";
import axios from "axios";
//Components
import Layout from "../../container/ui/layout/Layout";

const Documentation: React.FC = () => {
  interface commentsInterface {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  let [comments, setComments] = useState<commentsInterface[] | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data)        
      });
  });

  return (
    <Layout isImage={false} color={"gray"}>
      <div id="doc_container">
        <h1>Documentation</h1>
        <div className="flex_container">
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className="doc_elements">
          <div className="flex_comments">
            {
              comments?.map( el => {
                if (el.id <= 400) {
                  return (
                    <div key={el.id}>
                      <h3>{el.name}</h3>
                      <p>{el.body}</p>
                      <br/>
                      <p>{el.email}</p>
                    </div>
                  )
                }
              })
            }
            {/* <button onClick={() => console.log(comments)}>sdfgh</button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
