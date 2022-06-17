import { Component } from "react";
import Meta from "../../components/Meta/Meta";
import Navbar from "../../components/Navbar/navbar";
import PostDetailes from "./postDetailes";
const Post =()=>{
            return (
              <div>
                <Meta title={'پست ها'} />
                <Navbar />
                <div className="pt-36">
                  <PostDetailes />
                </div>
              </div>
            );
        }

export default Post;