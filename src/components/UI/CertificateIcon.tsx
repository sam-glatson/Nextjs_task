import React from "react";

const CertificateIcon = (props: any) => {
    const { width } = props;

    return (
        <svg
            width={`${width ? width : "17"}`}
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11.8457 0V4.22791H16.1308L11.8457 0Z" fill="#D5D5D5" />
            <path
                d="M5.40308 15.1996L4.58215 11.9511C4.97113 11.5873 5.24059 11.1168 5.35569 10.6004C5.47079 10.0839 5.42624 9.54525 5.2278 9.05405C5.02936 8.56284 4.68615 8.14166 4.24254 7.84494C3.79893 7.54822 3.27531 7.38961 2.73937 7.38961C2.20344 7.38961 1.67982 7.54822 1.23621 7.84494C0.792596 8.14166 0.449387 8.56284 0.250946 9.05405C0.052505 9.54525 0.00795547 10.0839 0.123056 10.6004C0.238157 11.1168 0.507616 11.5873 0.896601 11.9511L0.0756702 15.1996C0.0531068 15.2969 0.0587355 15.3986 0.0919144 15.493C0.125093 15.5873 0.184486 15.6706 0.263319 15.7333C0.342151 15.7959 0.437248 15.8355 0.537762 15.8474C0.638275 15.8593 0.740159 15.8431 0.83179 15.8006L2.73613 14.8606L4.6394 15.8006C4.71415 15.8365 4.79608 15.8554 4.87919 15.8561C4.96038 15.8554 5.04036 15.8366 5.11318 15.8012C5.18601 15.7658 5.24981 15.7147 5.29984 15.6516C5.34987 15.5885 5.38484 15.5151 5.40215 15.4368C5.41947 15.3586 5.41867 15.2775 5.39984 15.1996H5.40308ZM2.73937 11.6271C2.42148 11.6271 2.11073 11.5341 1.84641 11.3598C1.58209 11.1856 1.37608 10.9379 1.25443 10.6481C1.13277 10.3583 1.10094 10.0395 1.16296 9.73184C1.22498 9.42422 1.37806 9.14164 1.60284 8.91985C1.82763 8.69806 2.11402 8.54703 2.42581 8.48584C2.73759 8.42465 3.06076 8.45605 3.35446 8.57608C3.64815 8.69611 3.89918 8.89938 4.07579 9.16017C4.2524 9.42097 4.34667 9.72756 4.34667 10.0412C4.3461 10.4616 4.17657 10.8647 3.87527 11.162C3.57397 11.4593 3.16548 11.6265 2.73937 11.6271V11.6271Z"
                fill="#D5D5D5"
            />
            <path
                d="M11.8465 5.28515C11.5624 5.28487 11.2901 5.17339 11.0892 4.97518C10.8883 4.77697 10.7753 4.50822 10.775 4.22791V0H4.34692C4.06263 0.000282474 3.79009 0.111907 3.58917 0.310348C3.38825 0.508789 3.27539 0.777812 3.27539 1.05831V6.39781C4.16601 6.52255 4.9813 6.9596 5.57202 7.62896C6.16275 8.29831 6.48938 9.1552 6.49214 10.0427C6.49424 10.8314 6.23729 11.5994 5.75978 12.2318L6.40788 14.7993H15.0622C15.3464 14.7993 15.619 14.6879 15.8199 14.4896C16.0209 14.2913 16.1338 14.0224 16.1338 13.742V5.28515H11.8487H11.8465ZM5.95205 4.22791C5.82167 4.21154 5.70182 4.14882 5.61494 4.05151C5.52807 3.95419 5.48014 3.82896 5.48014 3.69929C5.48014 3.56961 5.52807 3.44438 5.61494 3.34706C5.70182 3.24975 5.82167 3.18703 5.95205 3.17066H9.16664C9.29702 3.18703 9.41688 3.24975 9.50375 3.34706C9.59062 3.44438 9.63855 3.56961 9.63855 3.69929C9.63855 3.82896 9.59062 3.95419 9.50375 4.05151C9.41688 4.14882 9.29702 4.21154 9.16664 4.22791H5.95205ZM13.4517 10.5703H8.09511C8.01905 10.5799 7.94178 10.5733 7.86848 10.5511C7.79517 10.5289 7.72749 10.4916 7.66995 10.4416C7.61241 10.3916 7.56632 10.33 7.53475 10.2611C7.50318 10.1921 7.48685 10.1173 7.48685 10.0417C7.48685 9.96602 7.50318 9.89123 7.53475 9.82228C7.56632 9.75333 7.61241 9.6918 7.66995 9.6418C7.72749 9.59179 7.79517 9.55444 7.86848 9.53224C7.94178 9.51005 8.01905 9.50351 8.09511 9.51306H13.4517C13.5278 9.50351 13.605 9.51005 13.6783 9.53224C13.7516 9.55444 13.8193 9.59179 13.8768 9.6418C13.9344 9.6918 13.9805 9.75333 14.0121 9.82228C14.0436 9.89123 14.0599 9.96602 14.0599 10.0417C14.0599 10.1173 14.0436 10.1921 14.0121 10.2611C13.9805 10.33 13.9344 10.3916 13.8768 10.4416C13.8193 10.4916 13.7516 10.5289 13.6783 10.5511C13.605 10.5733 13.5278 10.5799 13.4517 10.5703V10.5703ZM13.4517 7.39857H7.02466C6.94859 7.40812 6.87134 7.40158 6.79803 7.37938C6.72472 7.35719 6.65705 7.31984 6.5995 7.26983C6.54196 7.21982 6.49587 7.1583 6.4643 7.08935C6.43273 7.0204 6.41639 6.94561 6.41639 6.86995C6.41639 6.79429 6.43273 6.7195 6.4643 6.65055C6.49587 6.5816 6.54196 6.52007 6.5995 6.47007C6.65705 6.42006 6.72472 6.38271 6.79803 6.36051C6.87134 6.33832 6.94859 6.33178 7.02466 6.34133H13.4528C13.5288 6.33178 13.6061 6.33832 13.6794 6.36051C13.7527 6.38271 13.8204 6.42006 13.8779 6.47007C13.9355 6.52007 13.9816 6.5816 14.0131 6.65055C14.0447 6.7195 14.061 6.79429 14.061 6.86995C14.061 6.94561 14.0447 7.0204 14.0131 7.08935C13.9816 7.1583 13.9355 7.21982 13.8779 7.26983C13.8204 7.31984 13.7527 7.35719 13.6794 7.37938C13.6061 7.40158 13.5288 7.40812 13.4528 7.39857H13.4517Z"
                fill="#D5D5D5"
            />
        </svg>
    );
};

export default CertificateIcon;