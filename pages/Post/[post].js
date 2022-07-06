import { Component } from "react";
import Meta from "../../components/Meta/Meta";
import Navbar from "../../components/Navbar/navbar";
import PostDetailes from "./postDetailes";
import SubFoooter from '../../components/Footer/subfooter';
const Post =()=>{
            return (
              <div>
                <Meta title={'پست ها'} />
                <Navbar />
                <div className="pt-36">
                  <PostDetailes />
                  {/* <PostDetailes /> */}
                  <SubFoooter
                    title="روشنایی همه تاریکی ها"
                    reserved="All Right Reserved"
                  />
                </div>
              </div>
            );
        }

export default Post;