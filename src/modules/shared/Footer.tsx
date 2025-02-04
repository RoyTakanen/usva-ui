import Header from "@/components/shared/Header"
import Link from "next/link"

function LinkWithLabel(props: { link: string; label: string; linktext: string; linkclass: string | null }) {
    return (
        <div className="linkwithlabel">
            <span>{props.label}</span>
            <a className={props.linkclass || ""} href={props.link}>
                {props.linktext}
            </a>
        </div>
    )
}

export default function Footer() {
    return (
        <div className="footer">
            <div className="content">
                <Header title="More information" description={null} />

                <div className="links">
                    <div className="linksContainer left">
                        <h2 className="title">Contacts</h2>
                        <LinkWithLabel
                            link="mailto:sec@usva.cc"
                            linktext="sec@usva.cc"
                            linkclass="mail"
                            label="Security Contact"
                        />
                        <LinkWithLabel
                            link="mailto:collaboration@usva.cc"
                            linktext="collaboration@usva.cc"
                            linkclass="mail"
                            label="Collaboration"
                        />
                    </div>
                    <div className="linksContainer right">
                        <h2 className="title">Links</h2>
                        <Link href="https://paypal.me/tvalkonen">
                            <a target="_blank">Sponsor</a>
                        </Link>
                        <Link href="/terms-of-service">
                            <a target="_blank">Terms of Service</a>
                        </Link>
                        <Link href="/privacy-policy">
                            <a target="_blank">Privacy Policy</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
