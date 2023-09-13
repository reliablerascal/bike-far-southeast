// 9/7/23 RR
//note that I hardcoded image paths, to facilitate porting this story to WordPress with minimal effort

var config = {
    style: 'mapbox://styles/robcat26/cllfi4uo901m701qleb6n02ik',
    
    //production access token specific to bike southeast project and restricted by URLs:
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xtMHpwNmtpMGV4ZTNkbTFmazczNXJqNSJ9.l9P-WMfiDKXg4Iv74yVueA',
    //temp public access token for offline testing:
    //accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xtNWF5bGYzMDNkbTNubzhnZTJxZ2x3ZyJ9.s980uralAwWmIhegxpNs2A',
   
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,

    chapters: [
        {
            id: 'header-spacer',
            alignment: 'full',
            hidden: true,
            //title: '',
            //image: './images/wash_park_scene_without_ppl.jpg',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            //description: 'spacer',
            location: {
                center: [-87.61265, 41.85399],
                zoom: 9.81,
                pitch: 77.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'bike-lanes', opacity:0},
                {layer: 'burnham-gw-north', opacity:0},
                {layer: 'burnham-gw-south', opacity:0},
                {layer: 'burnham-gw-gap', opacity:0},
                {layer: 'park-calumet', opacity:0},
                {layer: 'park-calumet-shores', opacity:0},
                {layer: 'park-eggers-grove', opacity:0},
                {layer: 'park-hegewisch', opacity:0},
                {layer: 'park-wolf-lake', opacity:0},
                {layer: 'parks-all-se', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'existing bike lanes',
            alignment: 'left',
            hidden: false,
            //image: './images/henry-booth-house.png',
            description: 'From the point of view of the pedestrians and bike riders, it\'s hard not to notice the obstacles posed by the area\'s car-centric design. Risky traffic crossings and informal paths along medians and grassy verges interrupt a steadily expanding but still insufficient patchwork of bikeways. The bike facilities, mostly just shared-lane markings ("sharrows") and buffered lanes, with no physical protection from traffic, are limited. For instance, the <a href="https://engage.cmap.illinois.gov/hegewisch-neighborhood-plan" target="_blank">Hegewisch Neighborhood Plan</a> noted that residents felt unsafe on 134th Street near Avenue O due to "excessive speeding by cars" and large trucks which are supposed to be legally prohibited from the road.',
            location: {
                center: [-87.55685590723697,
                    41.699210130018266],
                zoom: 11.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:1},
                {layer: 'park-calumet', opacity:0},
                {layer: 'park-hegewisch', opacity:0},
                {layer: 'park-wolf-lake', opacity:0},
                {layer: 'park-eggers-grove', opacity:0}
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'dot-bike-ride',
            alignment: 'left',
            hidden: false,
            //image: './images/henry-booth-house.png',
            description: 'As noted in the Hegewisch plan, the area\'s parks remain underutilized in part because of this limited bike and pedestrian access. As restoration of the area\'s parks is a work in progress, so too are interdependent efforts to improve transit connecting local residents to the parks.',
            location: {
                center: [-87.55685590723697,
                    41.699210130018266],
                zoom: 11.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:1},
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'park-hegewisch', opacity:0.5},
                {layer: 'park-wolf-lake', opacity:0.5},
                {layer: 'park-eggers-grove', opacity:0.5} 
            ],
            onChapterExit: [   
            ]
        },
        
        
///////////////////////////////////////////////
//                                           //
//  THREE ISLANDS IN AN ASPHALT SEA          //
//                                           //
///////////////////////////////////////////////
        {
            id: 'subhead-three-islands',
            alignment: 'center',
            hidden: false,
            title: 'Green Islands in an Asphalt Sea',
            //image: './images/henry-booth-house.png',
            // description: 'As noted in the Hegewisch plan, the area\'s parks remain underutilized in part because of this limited bike and pedestrian access. As restoration of the area\'s parks is a work in progress, so too are interdependent efforts to improve transit connecting local residents to the parks.',
            location: {
                center: [-87.55685590723697,
                    41.699210130018266],
                zoom: 11.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:1},
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'park-hegewisch', opacity:0.5},
                {layer: 'park-wolf-lake', opacity:0.5},
                {layer: 'park-eggers-grove', opacity:0.5} 
            ],
            onChapterExit: [
            ]
        },
        
        
///////////////////////////////////////////////
//  CALUMET PARK/ LAKESHORE                  //
///////////////////////////////////////////////         
        {
            id: 'calumet-park',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            caption: 'Calumet Park Beach. Photo: Rob Reid',
            description: 'Developed from land acquired by the city in 1904, Calumet Park originally served the area\'s influx of immigrants working in the steel mills and railyards. The park features a beach on Lake Michigan\'s shore.',
            location: {
                center: [-87.52929693758914,
                    41.714936581261895],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:0},
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'park-hegewisch', opacity:0},
                {layer: 'park-wolf-lake', opacity:0},
                {layer: 'park-eggers-grove', opacity:0},
                {layer: 'path-lakeshore', opacity:0}                  
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'lakeshore-trail',
            alignment: 'left',
            hidden: false,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            description: 'A few hundred yards from the Indiana state border, it\'s also only a few miles south of Chicago\'s 18-mile continuous stretch of lakefront trail.',
            location: {
                center: [-87.55741, 41.75353],
                zoom: 11.43,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'park-iroquois-landing', opacity:0},
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'parks-all-se', opacity:0},
                {layer: 'path-lakeshore', opacity:1}                 
            ],
            onChapterExit: [
            ]
        },
        
        
        {
            id: 'lakeshore-trail-connection',
            alignment: 'left',
            hidden: false,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            description: 'Closing the gap to lakefront access remains a complex long-term vision. But the park district\'s <a href="https://www.chicagoparkdistrict.com/parks-facilities/park-no-566-usx" target="_blank">acquisition of U.S. Steel\'s South Works facility</a> (a.k.a. Park 566) establishes the land right-of-way to eventually connect Calumet Park to Iroquois Landing, Steelworker\'s Park, Rainbow Beach Park, and the city\'s entire lakefront trail via its current southern end at South Shore Park.',
            location: {
                center: [-87.54742, 41.74416],
                zoom: 12.27,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'park-iroquois-landing', opacity:0.5},
                {layer: 'parks-all-se', opacity:0.5},
                {layer: 'path-lakeshore', opacity:1}                 
            ],
            onChapterExit: [
            ]
        },



        {
            id: '100th-viaduct',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/olviedo-100th.jpg',
            caption: 'On the <a href="https://storymaps.arcgis.com/stories/56fd791cb1fa4cf69cd67411c345442a" target="_blank">Lake Calumet Bike Network Study Tour in August</a>, Alan Oviedo describes the challenges of crossing the 100th Street viaduct while empahsizing the need to improve access for local residents. Photo: Rob Reid',
            description: 'Unfortunately, Calumet Park is also difficult for Southeast side residents to access from the west and the south.<p>“It\'s a death trap,” Cook County transit manager Benet Haller said of the most direct route to the park under the Chicago Skyway viaduct at Ewing Avenue and 100th Street, during a <a href="https://storymaps.arcgis.com/stories/56fd791cb1fa4cf69cd67411c345442a" target="_blank">bike transit awareness tour in August</a>.',
            location: {
                center: [-87.53510682861177,
                    41.71358357592675],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'park-iroquois-landing', opacity:0},
                {layer: 'point-100th-viaduct', opacity:1},
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'parks-all-se', opacity:0},
                {layer: 'park-wolf-lake', opacity:0},
                {layer: 'path-lakeshore', opacity:0}    
            ],
            onChapterExit: [
                {layer: 'point-100th-viaduct', opacity:0}
            ]
        },


///////////////////////////////////////////////
//  BURNHAM GREENWAY/ WOLF LAKE              //
/////////////////////////////////////////////// 
        {
            id: 'burnham-greenway-north',
            alignment: 'left',
            hidden: false,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/point-100th-viaduct.png',
            description: 'The <a href="https://www.traillink.com/trail/burnham-greenway/" target="_blank">Burnham Greenway</a>, the city\'s most effective means of bike access from the south, ends at this viaduct. Following part of a former railroad corridor to Lansing Illinois, the greenway connects Calumet Park to Wolf Lake (a.k.a. William W. Powers) State Recreation Area- a <a href="https://dnr.illinois.gov/parks/park.williamwpowers.html" target="_blank">popular fishing destination</a> straddling the state border in the Hegewisch neighborhood.',
            location: {
                center: [-87.52950, 41.69066],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'burnham-gw-north', opacity:1},
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'park-wolf-lake', opacity:0.3} 
            ],
            onChapterExit: [
            ]
        },



        {
            id: 'wolf-lake',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/wolf-lake-turn.jpg',
            description: 'But the Greenway, eventually intended to extend 11 miles to State Street in Burnham, Illinois, has a 2.5 mile gap, forcing bikers to share the narrow Wolf Lake Boulevard with automobile traffic alongside Wolf Lake and to the south. The Burnham Plan Centennial and the nonprofit organization Openlands considered closing this gap to be the most productive project in <a href="https://burnhamplan100.lib.uchicago.edu/events/id/424/" target="_blank">bringing together the region\'s unconnected green infrastructure</a>.',
            location: {
                center: [-87.53670, 41.66096],
                zoom: 11.37,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'burnham-gw-north', opacity:1},
                {layer: 'burnham-gw-south', opacity:1},
                {layer: 'burnham-gw-gap', opacity:1},
                {layer: 'point-bridge-burnham-brainard', opacity: 0}
            ],
            onChapterExit: [
            ]
        },



        {
            id: 'burnham-greenway-gap',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/brainard-bridge.jpg',
            caption: 'Rendering of proposed bridge over train tracks along Brainard. View southeast along Brainard. Image: <a href="https://burnham-il.gov/burnhamconnector-2/" target="_blank">Village of Burnham</a>',
            description: 'In addition to land acquisition, the most significant barrier to bridging Burnham Greenway\'s gap is literally a <a href="https://activetrans.org/blog/enhancing-lake-calumet-area-connections" target="_blank">bridge over train tracks at Burnham and Brainard</a>- a project complicated by ongoing negotiations with railroad companies.',
            location: {
                center: [-87.53928, 41.64339],
                zoom: 12.89,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:0},
                {layer: 'burnham-gw-north', opacity:1},
                {layer: 'burnham-gw-south', opacity:1},
                {layer: 'burnham-gw-gap', opacity:1},
                {layer: 'park-hegewisch', opacity:0},
                {layer: 'point-bridge-burnham-brainard', opacity: 1} 
            ],
            onChapterExit: [
            ]
        },     


///////////////////////////////////////////////
//   HEGEWISCH MARSH                         //
///////////////////////////////////////////////    
        {
            id: 'bridge-to-hegewisch',
            alignment: 'left',
            hidden: false,
            image: './images/hegewisch-marsh-bridge.jpg',
            description: 'Closing the Burnham Greenway gap would also help connect bikers to the recently completed bridge across Torrence leading to Hegewisch Marsh Park, or Little Marsh.',
            location: {
                center: [-87.55758, 41.65839],
                zoom: 12.89,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:1},
                {layer: 'burnham-gw-north', opacity:1},
                {layer: 'burnham-gw-south', opacity:1},
                {layer: 'burnham-gw-gap', opacity:1},
                {layer: 'park-hegewisch', opacity:0.5},
                {layer: 'point-bridge-burnham-brainard', opacity: 0}
            ],
            onChapterExit: [
            ]
        },



        {
            id: 'hegewisch-marsh-park',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/hegewisch-marsh-zoline.jpg',
            caption: 'Hegewisch Marsh Park (a.k.a. "Little Marsh"). Photo: Jeff Zoline',
            description: 'The recent recipient of a <a href="https://news.wttw.com/2022/12/09/feds-pour-big-money-coastal-restoration-projects-and-chicago-s-hegewisch-marsh-comes-out" target="_blank">$500,000 grant from the National Coastal Resilience Fund</a>, the 129-acre park provides a home to <a href="https://southsideweekly.com/best-natural-oasis-hegewisch-marsh/" target="_blank">cottonwoods and cottontails</a> amidst marsh, wetland, and meadows on the site of former steel mills. As the <a href="https://engage.cmap.illinois.gov/hegewisch-neighborhood-plan" target="_blank">Hegewisch Neighborhood Plan</a> notes, it\'s an "underutilized" resource, in part because it\'s hard to get there, at the intersection of heavily trafficked 130th and Torrence.',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            location: {
                center: [-87.56236604152772, 41.6556252316896],
                zoom: 15,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'bike-lanes', opacity:0},
                {layer: 'burnham-gw-north', opacity:0},
                {layer: 'burnham-gw-south', opacity:0},
                {layer: 'burnham-gw-gap', opacity:0},
                {layer: 'park-hegewisch', opacity:0.5},
                {layer: 'point-bridge-burnham-brainard', opacity: 0}
            ],
            onChapterExit: [
            ]
        },

///////////////////////////////////////////////
//                                           //
//  East Meets West, Dangerously             //
//                                           //
///////////////////////////////////////////////
{
    id: 'subhead-east-meets-west',
    alignment: 'center',
    hidden: false,
    title: 'East Meets West, Dangerously',
    //image: './images/henry-booth-house.png',
    // description: 'As noted in the Hegewisch plan, the area\'s parks remain underutilized in part because of this limited bike and pedestrian access. As restoration of the area\'s parks is a work in progress, so too are interdependent efforts to improve transit connecting local residents to the parks.',
    location: {
        center: [-87.55607, 41.68376],
        zoom: 12,
        pitch: 0.00,
        bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [ 
        {layer: 'bike-lanes', opacity:1},
        {layer: 'burnham-gw-north', opacity:1},
        {layer: 'burnham-gw-south', opacity:1},
        {layer: 'park-calumet', opacity:0},
        {layer: 'park-hegewisch', opacity:0} 
    ],
    onChapterExit: [
    ]
},



        {
            id: 'jane-healy',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/jane-healey-2023-08-19.jpg',
            caption: 'Jane Healy at Lake Calumet Bike Network Study Tour, August 19. Photo: Rob Reid',
            description: 'Aside from gaps in the lakefront trail and the Burnham Greenway, east to west transit is even more problematic for bikers. Bike commuters such as Jane Healy, a bike advocate who commutes from her home in Blue Island to St. Francis de Sales High School, confront this challenge regularly.<p>“People want to go out into nature, take their strollers or bring their grandpa out. And it\'s hard,” she says, noting that she\'s been hit by cars twice and incurred over $100,000 in related medical bills for surgery.',
            location: {
                center: [-87.55607, 41.68376],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'raster-traffic-stress', opacity: 0}  
            ],
            onChapterExit: [
            ]
        },


        {
            id: 'east-side-connectivity',
            alignment: 'left',
            hidden: false,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/point-100th-viaduct.png',
            description: 'For her, 130th is out of the question due to a lack of sidewalks and bike infrastructure west of the Calumet river. That leaves 103rd as the next potential east-west crossing. “103rd freaks me out and that’s the only way I can go east/west,” she says.<p>The recently published <a href="https://bigmarsh.org/2023/07/14/east-side-community-connections-plan/" target="_blank">East Side Neighborhood Connectivity Plan</a> classified both 103rd and 130th as LTS4- the highest level of traffic stress categorized by traffic engineers.<p>Respondents to a recent survey by Chicago Metropolitan Agency for Planning (CMAP) and the Illinois International Port District identified east-west access as the most needed investment for the Lake Calumet industrial site- ranking above access to nature and exercise.',
            location: {
                center: [-87.55607, 41.68376],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'raster-traffic-stress', opacity: 1} 
            ],
            onChapterExit: [
                {layer: 'raster-traffic-stress', opacity: 0}
            ]
        },
        
    

///////////////////////////////////////////////
//                                           //
//  VISIONS OF CONNECTION                    //
//                                           //
///////////////////////////////////////////////
{
    id: 'subhead-visions-of-connection',
    alignment: 'center',
    hidden: false,
    title: 'Visions of Connection',
    //image: './images/henry-booth-house.png',
    // description: 'As noted in the Hegewisch plan, the area\'s parks remain underutilized in part because of this limited bike and pedestrian access. As restoration of the area\'s parks is a work in progress, so too are interdependent efforts to improve transit connecting local residents to the parks.',
    location: {
        center: [-87.55607, 41.68376],
                zoom: 11.69,
                pitch: 0.00,
                bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
        {layer: 'raster-traffic-stress', opacity: 0} 
    ],
    onChapterExit: [
    ]
},



{
    id: 'cmap-plan',
    alignment: 'left',
    hidden: false,
    //title: '',
    //image: 'https://reliablerascal.github.io/bike-far-southeast/images/hegewisch-marsh-park.jpg',
    description: 'Multiple local stakeholders share overlapping visions of improving transit in the area. In April, Cook County released a <a href="https://www.cookcountyil.gov/bikeplan" target="_blank">Bike Plan</a> envisioning a network of low-stress bike routes reaching within a mile of 96% of Cook County residents. CMAP\'s own <a href="https://www.cmap.illinois.gov/mobility/walking-and-bicycling/greenways-and-trails#Northeastern_Illinois_Regional_Greenways_and_Trails_Plan_2017" target="_blank">long-range walking and biking plan</a> proposed a “network of continuous greenway and trail corridors, linked across jurisdictions, providing scenic beauty, natural habitat, and recreational and transportation opportunities.”',
    location: {
        center: [-87.55607, 41.68376],
                zoom: 11.69,
                pitch: 0.00,
                bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
        {layer: 'park-calumet', opacity:0},
        {layer: 'park-hegewisch', opacity:0},
        {layer: 'path-lcbn-august', opacity: 0},
        {layer: 'bike-lanes', opacity:1},
        {layer: 'burnham-gw-north', opacity:1},
        {layer: 'burnham-gw-south', opacity:1}
    ],
    onChapterExit: [
    ]
},



{
    id: 'dot-tour-august',
    alignment: 'left',
    hidden: false,
    //title: '',
    //image: 'https://reliablerascal.github.io/bike-far-southeast/images/hegewisch-marsh-park.jpg',
    description: 'To build awareness of the limitations and potential for biking on the southeast side, Chicago and Cook County departments of transportation coordinated a <a href="https://chi.streetsblog.org/2023/08/23/county-cdot-hosted-bike-ride-to-look-at-the-strengths-and-weaknesses-of-se-side-bike-infrastructure" target="_blank">bike tour through Chicago\'s Southeast side</a> in August, leading from Hegewisch Marsh Park to Calumet Park Beach.',
    location: {
        center: [-87.54488, 41.68837],
zoom: 11.91,
pitch: 0.00,
bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
        {layer: 'park-calumet', opacity:0.5},
        {layer: 'park-hegewisch', opacity:0.5},
        {layer: 'path-lcbn-august', opacity: 1},
        {layer: 'path-lcbn-september', opacity: 0},
        {layer: 'bike-lanes', opacity:0.3},
        {layer: 'burnham-gw-north', opacity:0.3},
        {layer: 'burnham-gw-south', opacity:0.3}
    ],
    onChapterExit: [
    ]
},



{
    id: 'dot-tour-september',
    alignment: 'left',
    hidden: false,
    //title: '',
    //image: 'https://reliablerascal.github.io/bike-far-southeast/images/hegewisch-marsh-park.jpg',
    description: 'As part of the <a href="https://storymaps.arcgis.com/stories/56fd791cb1fa4cf69cd67411c345442a" target="_blank">Lake Calumet Bike Network study</a>, a second tour planned for <a href="https://storymaps.arcgis.com/stories/56fd791cb1fa4cf69cd67411c345442a#ref-n-u5t7bg" target="_blank">September 23</a> aims to highlight transit challenges in the nearby Roseland neighborhood.',
    location: {
        center: [-87.61208, 41.70337],
zoom: 12.76,
pitch: 0.00,
bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
        {layer: 'park-calumet', opacity:0},
        {layer: 'park-hegewisch', opacity:0},
        {layer: 'path-lcbn-august', opacity: 0},
        {layer: 'path-lcbn-september', opacity: 1},
        {layer: 'raster-111th-bridge', opacity: 0},
        {layer: 'bike-lanes', opacity:1},
        {layer: 'burnham-gw-north', opacity:1},
        {layer: 'burnham-gw-south', opacity:1}
    ],
    onChapterExit: [
    ]
},



{
    id: '111th-bridge',
    alignment: 'left',
    hidden: false,
    //title: '',
    image: 'https://reliablerascal.github.io/bike-far-southeast/images/lake_cal_crossing.png',
    caption: 'Rendering of the trail from 111th Street across Lake Calumet to Big Marsh bike park. Image: <a href="https://activetrans.org/lakecalumettrail" target="_blank">Active Transporation Alliance</a>',
    description: 'In 2015, the Active Transportation Alliance highlighted a constellation of biking and walking improvements along streets including 103rd and 130th, as part of its <a href="http://www.activetrans.org/sites/files/BIGMARSH.pdf" target="_blank">Big Marsh Access Action Plan</a> for facilitating access to and across one of the city\'s newest parks. The plan also featured a proposed bridge across Lake Calumet at 111th.',
    location: {
        center: [-87.58583, 41.68731],
zoom: 13.64,
pitch: 0.00,
bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
        {layer: 'path-lcbn-september', opacity: 0},
        {layer: 'park-hegewisch', opacity:0},
        {layer: 'raster-111th-bridge', opacity: 1}
    ],
    onChapterExit: [
    ]
},



{
    id: 'end-spacer',
    alignment: 'left',
    hidden: true,
    //title: '',
    //image: 'https://reliablerascal.github.io/bike-far-southeast/images/lake_cal_crossing.png',
    //caption: '',
    //description: '',
    location: {
        center: [-87.58583, 41.68731],
zoom: 13.64,
pitch: 0.00,
bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
    ],
    onChapterExit: [
    ]
}

        
//end chapters


    ]
};
