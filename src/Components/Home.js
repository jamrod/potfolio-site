import React from 'react'

import '../App.css'

function Home() {

    return (
        <div>
            <div className="flex-container-row content">
                <div><img src="me.jpg" className="me-pic" />
                    <p>
                        I am a software engineer who thrives on opportunities to create custom solutions for people. A cool headed problem solver who sees the big picture but keeps an eye on the details. Looking for a chance to turn ‘nothing works!’ into ‘this is exactly what we need!’
                    </p>
                    <p>
                        The tools and frameworks I work with include React.js and Python Django and platforms like Wordpress, Shopify, Drupal and Jekyll. Also, I have been experimenting with AWS for a few years and decided to get my Certified Cloud Practicioner <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-05-13&ci=AWS00887341">certification</a> last year. I have a deep understanding of Web technologies and how the internet works.
                    </p>
                    <p>
                        I have years of experience in tech, including management experience. An expert troubleshooter and problem solver who thrives on challenge. I got a big skills boost by going to General Assembly's Software Engineering Immersive course. Now I'm hoping to combine those new skills with my years of experience in health care, construction and customer service to bring solutions to complex problems.</p>
                    <p>
                        I live in Lafayette CO with my wife and children. My wife, Faith, is the genius and animating force behind <a href="https:\\thelittleherbalapothecary.com">The Little Herbal Apothecary</a> in downtown Lafayette. If you are nearby, come in and check it out!
                    </p>
                </div>

            </div>
            <div className="flex-container-row space">
                <img src="./icons/aws.svg" className="badges" />
                {/* <img src="/icons/django.svg" className="badges" /> */}
                {/* <img src="/icons/node.svg" className="badges" /> */}
                <img src="/icons/python.svg" className="badges" />
                {/* <img src="/icons/react.svg" className="badges" /> */}
                <img src="/icons/HTML5.svg" className="badges" />
                <img src="/icons/CSS3.svg" className="badges" />
                <img src="/icons/javascript.svg" className="badges" />
                {/* <img src="/icons/mongodb.svg" className="badges" /> */}
                {/* <img src="/icons/psql.svg" className="badges" /> */}
            </div>
        </div>
    )
}

export default Home