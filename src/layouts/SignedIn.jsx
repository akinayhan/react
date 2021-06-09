import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://4.bp.blogspot.com/-CnaEPAWtKug/WTYFUXa-y8I/AAAAAAAAANw/Ji9jfZprabgFJ_aJ6fc_v4y5iMUTLDPGQCK4B/s113/ASDA.png"/>
                <Dropdown pointing="top left" text="Akın">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}



