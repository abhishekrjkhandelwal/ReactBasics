import React from "react";
import ReactDOM from 'react-dom/client';

/**
 * header
 *  - Logo
 *  - Nav Items 
 * Body
 *  - Search 
 *  - Restaurant Container
 *    - RestroCard 
 *      - Img 
 *      - Name of res, Star rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links 
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://logocreator.io/wp-content/uploads/2024/01/food-logo-ideas-1.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>   
            </div>
        </div>
    )
}

//Resturant Card Component
const RestaurantCard = (props) => {
    const {resData} = props;    
    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo
    } = resData?.info

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

//Dummy Data
const resObj =  [
{
    "info": {
        "id": "669200",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Police Station",
        "areaName": "Vidhyadhar Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "61955",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 10.9,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "10.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-03 01:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹169"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-aadb78d8-9cf5-4af4-966e-8fb2fc9d13f3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/jaipur/chinese-wok-police-station-vidhyadhar-nagar-rest669200",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "446553",
        "name": "Burger Farm",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_446553.JPG",
        "locality": "Krishna Enclave",
        "areaName": "Jhotwara",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Snacks",
            "American",
            "Beverages",
            "Continental"
        ],
        "avgRating": 4.6,
        "parentId": "4660",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-03 03:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "500+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-aadb78d8-9cf5-4af4-966e-8fb2fc9d13f3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/jaipur/burger-farm-krishna-enclave-jhotwara-rest446553",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "708228",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/d5ec0a30-2ec4-40d1-aad7-eb8d9ae67f97_708228.JPG",
        "locality": "Sector-6",
        "areaName": "Vidhyadhar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4,
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 42,
            "lastMileTravel": 11,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "11.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-03 03:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹60"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-aadb78d8-9cf5-4af4-966e-8fb2fc9d13f3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/jaipur/subway-sector-6-vidhyadhar-rest708228",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "45176",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_45176.JPG",
        "locality": "Triton Mall",
        "areaName": "Jhotwara",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 7.9,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "7.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-03 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-aadb78d8-9cf5-4af4-966e-8fb2fc9d13f3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/jaipur/burger-king-triton-mall-jhotwara-rest45176",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                   resObj.map(restaruant => (
                   <RestaurantCard key={restaruant.info.id} resData={restaruant}/>
                ))}
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)