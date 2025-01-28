import { FEATURES_PATH_LINK, GALLERY_PATH_LINK, GITHUB_LINK_PATH, LIBRARY_PATH_LINK, LINKEDIN_LINK, PRICING_PATH_LINK,  } from "./constant";
import apiImg from "../assets/images/webp/api.webp"
import securityImg from "../assets/images/webp/security.webp"
import tools from "../assets/images/webp/tools.webp"



export const NAV_LINK_LIST = [
    {
        link: "Home",
        url: "/"
    },
    {
        link: "Features",
        url: FEATURES_PATH_LINK
    },
    {
        link: "Pricing",
        url:PRICING_PATH_LINK
    },
    {
        link: "Templates Gallery",
        url: GALLERY_PATH_LINK
    },
    {
        link: "Component Library",
        url: LIBRARY_PATH_LINK
    },
]
export const WORK_CARDS_LIST = [
    {
        icon: "chooseIcon",
        title: "Choose a template",
        content: "Browse our collection of professionally designed political templates. From local campaigns to national movements, find the perfect starting point that matches your mission."
    },
    {
        icon: "publishIcon",
        title: "Publish",
        content: "Launch your site instantly with our one-click publish. Your professional website goes live immediately, complete with built-in tools for organizing and engagement.",
    },
    {
        icon: "customIcon",
        title: "Customize",
        content: "Make it yours with our intuitive editor. Add supporter forms, donation buttons, and event pages. No coding needed – if you can imagine it, you can build it.",
    }
]
export const FEATURES_DATA_LIST = [
    {
        img: apiImg,
        title: "Build & Deploy",
        list: [
            "No-code visual builder", "50+pre-made political components", "Auto-scaling infrastructure", "Industry-leading load times",
        ],
    },
    {
        img: securityImg,
        title: "Security & Compliance",
        list: [
            "Campaign-grade security measures", "Personal segregated database", "Campaign vetting compliant opt-in system", "Full transparency (GitHub access)",
        ],
    },
    {
        img: tools,
        title: "Build & Deploy",
        list: [
            "No-code visual builder", "50+pre-made political components", "Auto-scaling infrastructure", "Industry-leading load times",
        ],
    },

]
export const PRICING_CARD_LIST = [
    {
        tag: "Free Tier",
        price: 0,
        timing: "Per month/annually",
        features: [{
            para: "Basic Components"
        }, {
            para: "Single Page"
        }, {
            para: "Subdomain URL",
            email: "(xyz.infracrat.com)"
        }, {
            para: "Limited Features"
        }],
        btnText: "Start your free trial",
    },
    {
        tag: "Premium Tier",
        price: 25,
        timing: "$20/mo annually",
        features: [{
            para: "All Components & Integrations"
        }, {
            para: "Unlimited Pages"
        }, {
            para: "Custom Domain Support"
        }, {
            para: "Complete Feature Access"
        }],
        btnText: "Purchase",
    }
]
export const DOMAIN_CARD_LIST = ["Domain Name","Status","Price","Action"]
export const DOMAIN_DATA_LIST = [
    {
        name:"xyz.infracrat.com",
        status:"Available",
        price:"$9.99/year",
        action:"Buy Now",
    },
    {
        name:"xyz.infracrat.com",
        status:"Available",
        price:"$9.99/year",
        action:"Buy Now",
    },
    {
        name:"xyz.infracrat.com",

        status:"Taken",
        price:"-",
        action:"Contact Owner",
    }
]
export const TRUST_TAB_LIST =[
   { icon:"dataProtection",
    title:"Data Protection Measures",
    tabcontent:[
        "Adherence to FEC guidelines for political campaigns",
        "GDPR and CCPA compliant data handling",
        "Transparent reporting tools for campaign finance",
        "Regular updates to match evolving regulations",
        "Avoiding Legal Penalties",
        "Building Trust and Credibility",
        "Ensures Legal and Ethical Operations",
    ]
   },
   { icon:"complaince",
    title:"Compliance with Regulations",
    tabcontent:[
        "Regular updates to match evolving regulations",
        "Avoiding Legal Penalties",
        "Building Trust and Credibility",
        "Adherence to FEC guidelines for political campaigns",
        "Transparent reporting tools for campaign finance",
        "Ensures Legal and Ethical Operations",
        "GDPR and CCPA compliant data handling",
    ]
   },
   { icon:"hosting",
    title:"Hosting Reliability Statss",
    tabcontent:[
        "GDPR and CCPA compliant data handling",
        "Regular updates to match evolving regulations",
        "Avoiding Legal Penalties",
        "Building Trust and Credibility",
        "Transparent reporting tools for campaign finance",
        "Adherence to FEC guidelines for political campaigns",
        "Ensures Legal and Ethical Operations",
    ]
   },
]
export const SOCIAL_LINK__LIST = [
    {
        icon:"github",
        url:GITHUB_LINK_PATH,
    },
    {
        icon:"linkedin",
        url:LINKEDIN_LINK,
    }
]
export const FOOTER_LINK_LIST =  [
    {
        title:"Links",
        list :[
          {  link:"Home",
            url:"/"
          },
          {
            link:"Features",
            url:FEATURES_PATH_LINK
          },
          {
            link:"Templates Gallery",
            url:GALLERY_PATH_LINK
          },
          {
            link:"Component Library",
            url:LIBRARY_PATH_LINK
          }
        ]
    },
    {
        title:"Contact Info",
        list :[
            {
                icon:"phone",
                link:"+123 456 7890",
                url:""
            },
            {
                icon:"mail",
                link:"support@liaison.app",
                url:""
            },
          ]
    }
]