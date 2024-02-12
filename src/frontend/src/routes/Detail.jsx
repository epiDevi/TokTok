import { useState, useEffect } from "react";

import NavBarBottom from "../components/Global/NavBarBottom";
import NavBarTop from "../components/Global/NavBarTop";
import BackArrowSvg from "../components/SVG/BackArrowSvg";
import PointsSvg from "../components/SVG/PointsSvg";
import DetailUser from "../components/Global/DetailUser";
import FollowSvg from "../components/SVG/FollowSvg";
import LineSvg from "../components/SVG/LineSvg";
import FeedsGallery from "../components/Global/FeedsGallery";
import UnFollowSvg from "../components/SVG/UnFollowSvg";
import ProfileGallery from "../components/Global/ProfileGallery";
import { useParams } from "react-router-dom";
import LoadingSpin from "../components/SVG/LoadingSpin";
import { useUserContext } from "../context/loginContext";

const Detail = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [detailUserData, setDetailUserData] = useState(null);
  const { userid } = useParams();
  const { refresh, setRefresh } = useUserContext();

  async function getUserData() {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users?id=${userid}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();

    if (res.ok) {
      setDetailUserData(data);
    }
  }
  useEffect(() => {
    getUserData();
  }, [refresh]);

  async function updateFollow() {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/follow?id=${userid}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );
    const response = await res.json();

    if (res.ok) {
      console.log(response.message);
      setIsFollowing(!isFollowing);
      setRefresh(!refresh);
      getUserData();
    }
  }

  useEffect(() => {
    setIsFollowing(detailUserData?.followStatus);
  }, [detailUserData]);

  const handleButtonClick = () => {
    updateFollow();
  };

  const buttonText = isFollowing ? "Unfollow" : "Follow";
  const buttonIcon = isFollowing ? (
    <UnFollowSvg svgFillColor="fill-base-100" />
  ) : (
    <FollowSvg svgFillColor="fill-base-100" />
  );
  if (!detailUserData)
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpin />
      </div>
    );
  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="back"
        leftText={detailUserData?.user?.username}
        rightSvgComponent={<PointsSvg />}
        rightLink="/"
      />
      <main className="p-6 pb-16">
        <DetailUser user={detailUserData.user} />
        <article className="w-full">
          <button
            onClick={handleButtonClick}
            className={`flex justify-center items-center gap-2  text-lg w-full rounded-3xl py-[10px] px-4 ${
              isFollowing
                ? "bg-base-100 text-primary border-2 border-primary"
                : "bg-primary text-base-100"
            }`}
          >
            <span>{isFollowing ? "Unfollow" : "Follow"}</span>
          </button>
        </article>
        <article className="mt-6 flex justify-center ">
          <LineSvg />
        </article>
        <FeedsGallery />
        <ProfileGallery userId={userid} />
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Detail;
