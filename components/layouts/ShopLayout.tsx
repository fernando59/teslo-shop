import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"


interface Props {
    title:string
    pageDescription:string
    imageFullUrl?:string
}

export const ShopLayout:FC<Props> = ({children,title,pageDescription,imageFullUrl}) => {
  return  <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        {/* Social Networks */}
        <meta name="og:title" content={title}/>
        <meta name="og:description" content={pageDescription}/>
        {
            imageFullUrl && <meta name="og:image" content={imageFullUrl}/>
        }


    </Head>

    <nav>
        <Navbar/>

    </nav>

    <main>
        {children}
    </main>

    <footer>
        {/* TODO footer */}
    </footer>


  </>
}
