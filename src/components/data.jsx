import amazon_icon from "../assests/amazon.png";
import bus_icon from "../assests/bus_icon.png";
import construction_icon from "../assests/construction_icon.png";
import dribble_icon from "../assests/dribble.png";
import dropbox_icon from "../assests/dropbox.png";
import fitness_icon from "../assests/fitness_icon.png";
import google_icon from "../assests/google.png";
import google2_icon from "../assests/google2.png";
import heart_icon from "../assests/heart_icon.png";
import microsoft_icon from "../assests/microsoft.png";
import pinterest_icon from "../assests/pinterest.png";
import spotify_icon from "../assests/spotify.png";
import train_icon from "../assests/train_icon.png";
import { BiChart } from "react-icons/bi";
import { PiPaintBrushThin } from "react-icons/pi";
import { TbWhirl } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TiWaves } from "react-icons/ti";
import { GoLaw } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { MdImportContacts } from "react-icons/md";

import { HiPencilSquare } from "react-icons/hi2";
export const job_categories = [
  //   {
  //     id: 1,
  //     image: amazon_icon,
  //     opening: "3",
  //     title: "Automotive",
  //   },
  {
    id: 2,
    image: bus_icon,
    opening: "4",
    title: "Automotive",
  },
  {
    id: 3,
    image: heart_icon,
    opening: "1",
    title: "Health and Care",
  },
  {
    id: 4,
    image: construction_icon,
    opening: "1",
    title: "Construction",
  },
  {
    id: 5,
    image: fitness_icon,
    opening: "1",
    title: "Fitness Trainer",
  },
  {
    id: 6,
    image: train_icon,
    opening: "1",
    title: "Industry",
  },
  {
    id: 7,
    image: bus_icon,
    opening: "4",
    title: "Automotive",
  },

  {
    id: 8,
    image: heart_icon,
    opening: "3",
    title: "Health and Care",
  },
  {
    id: 9,
    image: construction_icon,
    opening: "2",
    title: "Construction",
  },
];

export const recommended = [
  {
    id: 1,
    amount: "3000-4000",
    bgColor: "#f4f4ff",
    color: "#4b4efc",
    currency: "Euro",
    country: "Germany",
    job: "Construction",
    time: "4",
    title: "Project manager",
    type: "Temporary",
  },
  {
    id: 2,
    amount: "1000-2000",
    bgColor: "#fbf2f6",
    color: "#b70041",
    currency: "Australian Dollar",
    country: "Australia",
    job: "Development, Apps",
    time: "2",
    title: "Assistant manager",
    type: "Internship",
  },
  {
    id: 3,
    amount: "3000-5000",
    bgColor: "#fffbf2",
    color: "#ffb800",
    currency: "Dollar",
    country: "USA",
    job: "Engineering",
    time: "1",
    title: "IOS Engineer Backup ",
    type: "Contract",
  },
];
export const top_jobs = [
  {
    id: 1,
    bg_color: "#f4f4f4",
    color: "#4b4efc",
    img: google_icon,
    title: "Product Design",
    type: "Internship",
  },
  {
    id: 2,
    bg_color: "#fffbf2",
    color: "#fec220",
    img: pinterest_icon,
    title: "Product Mackup",
    type: "Internship",
  },
  {
    id: 3,
    bg_color: "#fbf2f6",
    color: "#c72b66",
    img: spotify_icon,
    title: "Web Maintenance",
    type: "Full Time",
  },
  {
    id: 4,
    bg_color: "#e8f3ea",
    color: "#349c30",
    img: dribble_icon,
    title: "PHP Developer",
    type: "Remote",
  },
];
export const featured_job_list = [
  {
    id: 1,
    bg1: "#f4fefe",
    bg2: "black",
    color: "#1ae4e8",
    company: "Gramware",
    icon1: <BiChart/>,
    icon2: <HiPencilSquare size={30}/>,
    location: "San Diego, CA",
    position: "Finacial Analyst ",
    title: "Finance",
    type: "Full Time",
  },
  {
    id: 2,
    bg1:"#f5fef8",
bg2:"#457b9d",
color:"#25ef75",
company:"Syspresoft",
icon1:<PiPaintBrushThin size={40} />,
icon2:<GiHamburger size={30} />,
location:"San Diego, CA",
position:"Web Developer",
title:"Development",
type: "Internship",
  },
  {
    id: 3,
    bg1:"#fefaf4",
bg2:"#e76f51",
color:"#d9b833",
company:"DataRes",
icon1:<GrAnnounce size={40} />,
icon2:<MdImportContacts size={30} />,
location:"San Diego, CA",
position:"Team Leader",
title:"Marketing",
type:"Remote",
  },
  {
    id: 4,
    bg1:"#f7fcfd",
    bg2:"#f4a261",
    color:"#5eb9d7",
    company:"Craftgenics",
    icon1:<IoPersonCircleSharp size={40} />,
    icon2:<TbWhirl size={30} />,
    location:"Los Angeles",
    position:"Coordinator",
    title:"Human Resource",
    type:"Contract",
  },
  { id: 5,
    bg1:"#f6f6ff",
bg2:"#e76f51",
color:"#4b4efc",
company:"Gramware",
icon1:<GoLaw size={40} />,
icon2:<TiWaves size={30} />,
location:"Los Angeles",
position:"Web Developer",
title:"Designer",
type:"Remote",
  },
  {
    id: 6,
    bg1:"#f7fcfd",
bg2:"#4895ef",
color:"#69bfd9",
company:"DataRes",
icon1:<IoPersonCircleSharp size={40} />,
icon2:<HiPencilSquare size={30} />,
location:"San Diego, CA",
position:"Support Engineer",
title:"Customer Services",
type:"Full Time",
  },
  {
    id: 7,
    bg1:"#fff9f6",
bg2:"#457b9d",
color:"#ff8c48",
company:"Syspresoft",
icon1:<FaHeartPulse size={40} />,
icon2:<GiHamburger size={30} />,
location:"San Diego, CA",
position:"Coordinator",
title:"Health and Care",
type:"Internship",
  },
  {
    id: 8,
    bg1:"#fff9f7",
    bg2:"#f4a261",
    color:"#ff843d",
    company:"Gramware",
    icon1:<FaCalculator size={40} />,
    icon2:<TbWhirl size={30} />,
    location:"Los Angeles",
    position:"Senior Editor",
    title:"Accounting",
    type:"Contract",
  },
];
