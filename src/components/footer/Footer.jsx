import React from 'react'
import css from './Footer.module.css'
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon } from '@heroicons/react/outline'
import Logo from '../../assets/logo.png'
function Footer() {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Focus</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span> 111 north avenue Orlando, FL 32881</span>
                    </span>

                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon} />
                        <a href='tel: 00201122293401'> 00201122293401 </a>
                    </span>

                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <a href='mailto: hossam255@gamil.com'> hossam255@gamil.com </a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        Sign In
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon} />
                        <a href="/about">
                            <p>About US</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <p> Safety Privacy & Terms </p>
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyRight}>
            <span>Copyright @2022 by Focus, Inc.</span>
            <span>All rights reserved .</span>
        </div>
    </div>
  )
}

export default Footer