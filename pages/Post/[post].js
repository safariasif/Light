import { Component } from "react";
import Meta from "../../components/Meta/Meta";
import Nav from "../../components/Navbar/nav";
import PostDetailes from "./postDetailes";
import SubFoooter from '../../components/Footer/subfooter';
const Post =()=>{
            return (
              <div>
                <Meta title={'پست ها'} />
                <Nav />
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