import AddLocationIcon from "@material-ui/icons/AddLocation";
import CallIcon from "@material-ui/icons/Call";
import EventIcon from "@material-ui/icons/Event";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PostAddIcon from "@material-ui/icons/PostAdd";
import EmailIcon from "@material-ui/icons/Email";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import React from "react";

export const arrayProfile =[
    {
        icon: <CallIcon /> ,
        title: "Mobile" ,
        data: "mobile",
    },
    {
        icon: <AddLocationIcon /> ,
        title: "Country" ,
        data: "country",
    },
    {
        icon: <EventIcon /> ,
        title: "Date of Birth" ,
        data: "birthDate",
    },
    {
        icon: <MyLocationIcon /> ,
        title: "Nationality" ,
        data: "nationality",
    },
    {
        icon: <PostAddIcon /> ,
        title: "Postal Code" ,
        data: "postalCode",
    },
    {
        icon: <EmailIcon /> ,
        title: "Email" ,
        data: "email",
    },
    {
        icon: <LocationCityIcon /> ,
        title: "City" ,
        data: "city",
    },
    {
        icon: <AddLocationIcon /> ,
        title: "Building" ,
        data: "building",
    },
];