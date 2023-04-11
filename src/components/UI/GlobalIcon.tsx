import React from "react";

const GlobalIcon = (props: any) => {
    const { width } = props;
    return (
        <svg
            width={`${width ? width : "20"}`}
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.0226 0.22168C8.04035 0.22168 6.10258 0.801659 4.45436 1.88828C2.80615 2.97489 1.52152 4.51934 0.762932 6.32632C0.00434268 8.1333 -0.194139 10.1217 0.192587 12.0399C0.579312 13.9582 1.53388 15.7203 2.93557 17.1033C4.33726 18.4863 6.12312 19.4281 8.06732 19.8097C10.0115 20.1912 12.0267 19.9954 13.8581 19.2469C15.6895 18.4985 17.2549 17.231 18.3562 15.6047C19.4575 13.9785 20.0453 12.0665 20.0453 10.1107C20.0375 7.49032 18.979 4.97949 17.1011 3.12661C15.2232 1.27373 12.6784 0.229384 10.0226 0.22168V0.22168ZM16.9387 6.15484H14.0319C13.7133 4.91631 13.242 3.721 12.6285 2.59567C14.4512 3.23397 15.9808 4.49706 16.9387 6.15484ZM10.0226 2.19899C10.8753 3.40446 11.5192 4.74125 11.928 6.15484H8.1185C8.54717 4.74894 9.18917 3.4152 10.0226 2.19899ZM2.30495 12.0892C2.09988 11.4498 1.99833 10.7825 2.00404 10.1119C1.99794 9.44006 2.09949 8.77149 2.30495 8.13093H5.71366C5.63045 8.78666 5.59706 9.44761 5.61377 10.1082C5.61377 10.8006 5.71366 11.3944 5.71366 12.0856L2.30495 12.0892ZM3.10657 14.0665H6.01334C6.33223 15.3038 6.80355 16.4979 7.41678 17.622C5.59471 16.9847 4.06517 15.7229 3.10657 14.0665ZM6.01334 6.15727H3.10657C4.08904 4.51935 5.61005 3.26251 7.41678 2.59567C6.80327 3.721 6.33194 4.91631 6.01334 6.15484V6.15727ZM10.0226 18.0248C9.17041 16.8193 8.52695 15.4825 8.1185 14.069H11.928C11.4987 15.4741 10.8563 16.807 10.0226 18.0224V18.0248ZM12.3325 12.0892H7.71769C7.60319 11.4354 7.53806 10.774 7.52284 10.1107C7.538 9.44691 7.60313 8.78518 7.71769 8.13093H12.4287C12.5452 8.78422 12.6124 9.44514 12.6297 10.1082C12.58 10.7749 12.4806 11.437 12.3325 12.0892ZM12.6285 17.622C13.2586 16.5039 13.7308 15.306 14.0319 14.0617H16.9387C15.981 15.7199 14.4514 16.9834 12.6285 17.622ZM14.4291 12.0892C14.5123 11.4335 14.5457 10.7725 14.5289 10.1119C14.5289 9.41953 14.4291 8.82573 14.4291 8.13458H17.8365C18.0416 8.77397 18.1432 9.44128 18.1374 10.1119C18.1431 10.7825 18.0416 11.4498 17.8365 12.0892H14.4291Z"
                fill="#D5D5D5"
            />
        </svg>
    );
};

export default GlobalIcon;
