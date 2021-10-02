import React from 'react'
import styled from 'styled-components'
import LayOut from '../Components/LayOut'



const Privacy = styled.div`
     width: 75%;
    padding-top: 5em;
    margin-inline: auto;
    p{
        margin-top: 2em;
        text-align: justify;
    }
    h1{
        padding-bottom: 1em;
        border-bottom: 0.5px solid lightgrey;
    }

`

export default function privacy() {
    return (
        <>
        <LayOut>
          <Privacy>
                <h1>Privacy Policy</h1>
                <p>Alexis Lepresle operates the alexislepresle.com website, which provides the SERVICE.</p>
                <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the alexislepresle.com website.</p>      
                <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
                <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at www.alexislepresle.com, unless otherwise defined in this Privacy Policy.</p>
               <p>Our Privacy Policy was created with the help of the Privacy Policy Template</p>  
               <h4>Information Collection and Use</h4>
               <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
                <h4>Log Data</h4>
                <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p> 

        </Privacy>
        </LayOut>  
        </>
    )
}
