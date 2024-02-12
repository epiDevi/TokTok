import { useEffect, useState } from "react";
import NavBarBottom from "../../components/Global/NavBarBottom";
import DetailUser from "../../components/Global/DetailUser";
import LineSvg from "../../components/SVG/LineSvg";
import FeedsGallery from "../../components/Global/FeedsGallery";
import ProfileGallery from "../../components/Global/ProfileGallery";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import SettingsActivitySvg from "../../components/SVG/settingsSVG/SettingsActivitySvg";
import SettingdFriendsSvg from "../../components/SVG/settingsSVG/SettingsFriendsSVG";
import SettingsInfoSvg from "../../components/SVG/settingsSVG/SettingsInfoSvg";
import SettingsMainSvg from "../../components/SVG/settingsSVG/SettingsMainSvg";
import SettingsQRSvg from "../../components/SVG/settingsSVG/SettingsQRSvg";
import SettingsSavedSvg from "../../components/SVG/settingsSVG/SettingsSavedSvg";
import SettingsArchiveSvg from "../../components/SVG/settingsSVG/SettingsArchiveSvg";
import HearthSvg from "../../components/SVG/HearthSvg";
import { useTheme } from "../../context/userContext";
import { useUserContext } from "../../context/loginContext";
import { Link, useNavigate } from "react-router-dom";
import LogOutSvg from "../../components/SVG/loginSvgs/LogOutSvg";

const ProfileDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();
  const { loginUser, setLoginUser } = useUserContext();

  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/logout",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        console.log("Don´t Logout");
      } else {
        const json = await response.json();
        // console.log(json);
        setLoginUser("");
        navigate("/loading");
      }
    } catch (error) {
      console.error("Logout Issue:", error);
    }
  };

  return (
    <>
      <ProfileHeader
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {!loginUser ? (
        <h1>Kein Profile Details vorhanden.....</h1>
      ) : (
        <main className="p-6 pb-16">
          {!loginUser ? <p></p> : <DetailUser user={loginUser} />}

          <article className="mt-6 flex justify-center ">
            <LineSvg />
          </article>
          <FeedsGallery />
          {!loginUser.posts || loginUser.posts.length === 0 ? (
            <h2 className="mt-6 text-2xl">no posts available</h2>
          ) : (
            <ProfileGallery userId={loginUser?._id} />
          )}
        </main>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0  bg-gray-800 bg-opacity-50"
          onClick={closeModal} // Hier wird closeModal aufgerufen, wenn der Benutzer auf das Overlay klickt
        ></div>
      )}
      <div
        className={`[&>*]:mb-6 fixed  bottom-0 z-50   ${
          theme === "dark"
            ? "bg-slate-800 text-[#9E9E9E]"
            : "bg-white text-[#212121]"
        }  w-full p-6 pb-16 rounded-t-[40px] transform  ${
          isModalOpen
            ? "translate-y-0  transition-transform duration-300 ease-out"
            : "translate-y-full  transition-transform duration-300 ease-in"
        }`}
      >
        <article className="flex gap-5 ">
          <SettingsMainSvg />
          <p className="text-[18px]">Setting</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsArchiveSvg />
          <p className="text-[18px]">Archive</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsActivitySvg />
          <p className="text-[18px]">Your Activity</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsQRSvg />
          <p className="text-[18px]">QR code</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsSavedSvg />
          <p className="text-[18px]">Saved</p>
        </article>
        <article className="flex gap-5 ">
          <SettingdFriendsSvg />
          <p className="text-[18px]">Close Friends</p>
        </article>
        <Link className="flex gap-5 " to="/favorites">
          <HearthSvg />
          <p className="text-[18px]">Favorites</p>
        </Link>
        <article className="flex gap-5 ">
          <SettingsInfoSvg />
          <p className="text-[18px]">Information Center</p>
        </article>
        <article onClick={handleLogout} className="flex gap-5 ">
          <LogOutSvg />
          <p className="text-[18px]">Log Out</p>
        </article>
      </div>
      <NavBarBottom
        item={{ home: false, search: false, profile: true, add: false }}
      />
    </>
  );
};

export default ProfileDetail;
