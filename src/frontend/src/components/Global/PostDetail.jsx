import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import PostUserHeader from "./PostUserHeader";
import PostDetailsFooter from "./PostDetailsFooter";
const PostDetail = ({ post, user, reloadFavorite }) => {
  //const { slug } = useParams();

  return (
    <>
      <section className="w-full  mb-6">
        <PostUserHeader user={user} />
        <Link to={"/post/" + post._id}>
          <section className="mt-4 w-full">
            <div className="avatar w-full">
              <div className=" rounded-[32px] w-full">
                <img src={post.img} />
              </div>
            </div>
          </section>
        </Link>
        <PostDetailsFooter post={post} reloadFavorite={reloadFavorite} />
      </section>
    </>
  );
};

export default PostDetail;
