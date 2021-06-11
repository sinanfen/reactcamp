import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/BoYRMteyQBOo9hgM2TO0"></Image>
                <Dropdown pointing="top left" text="Sinan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />   
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />                    
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
