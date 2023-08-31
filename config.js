var config = {
    style: 'mapbox://styles/robcat26/cllfi4uo901m701qleb6n02ik',
    accessToken: 'pk.eyJ1Ijoicm9iY2F0MjYiLCJhIjoiY2xrZTBrejIwMHp0YjNmcXZiaWN1enZwNiJ9._g79-Ecyuo5ahLVN3pyZZw',

    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'PROTOTYPE- Far South Side Bike Access',
    subtitle: 'Chicago\'s Southeast side possesses a wealth of waterfront and park space, but bikers can\'t yet safely access it.',
    byline: 'By Rob Reid | 31 August',
    footer: 'See GitHub repository for methodology and data.<br>Created based on the <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    leadPhoto: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach-fence-16-9.jpg',
    // leadParagraph: 'Hegewisch and East Side, Chicago’s southeasternmost neighborhoods, possess an abundance of park space, including Eggers Grove, Wolf Lake, Calumet Park, and Hegewisch Marsh Park. The I-90 expressway and major streets including 106th Street and Ewing Avenue facilitate automobile access for far away visitors. But these resources remain underutilized, in part because access remains treacherous for local residents– especially cyclists.',
    chapters: [
        {
            id: 'header-photo',
            alignment: 'full',
            hidden: true,
            //title: '',
            //image: './images/wash_park_scene_without_ppl.jpg',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            location: {
                center: [-87.61265, 41.85399],
                zoom: 9.81,
                pitch: 77.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'bike-path-dot', opacity:0},
                {layer: 'mapbox-satellite', opacity:0}
            ],
            onChapterExit: []
        },
        
        
        
        {
            id: 'zoom-scene',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: './images/wash_park_scene_without_ppl.jpg',
            description: 'Hegewisch and East Side, Chicago\'s southeasternmost neighborhoods, possess an abundance of park space, including Eggers Grove, Wolf Lake, Calumet Park, and Hegewisch Marsh Park. The I-90 expressway and major streets including 106th Street and Ewing Avenue facilitate automobile access for far away visitors. But these resources remain underutilized, in part because access remains treacherous for local residents-- especially cyclists.',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            location: {
                center: [-87.54426, 41.68283],
                zoom: 12.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //{layer: 'map', opacity:1},
                //{layer: 'mapboxgl-canvas', opacity:1},
                {layer: 'bike-path-dot', opacity:0},
                {layer: 'mapbox-satellite', opacity:0}
            ],
            onChapterExit: []
        },



        {
            id: 'hegewisch-marsh-park',
            alignment: 'left',
            hidden: false,
            //title: '',
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/hegewisch-marsh-park.jpg',
            description: 'Amongst the region\'s highlights, Hegewisch Marsh Park recently received a <a href="https://news.wttw.com/2022/12/09/feds-pour-big-money-coastal-restoration-projects-and-chicago-s-hegewisch-marsh-comes-out" target="_blank">$500,000 grant from the National Coastal Resilience Fund</a>. The <a href="https://ehq-production-us-california.s3.us-west-1.amazonaws.com/f899c722147d541e6b15b182d3519ecc550bf3e1/original/1692321554/a0eb09f778546029e629f366b3c32366_Hegewisch_Neighborhood_Plan_FINAL.pdf" target="_blank">Hegewisch Neighborhood Plan</a> released this month considers this park an "underutilized" resource, and recognizes the potential value of improved bike access for local businesses.',
            //and the The Oxford English dictionary defines a fort as a person or thing not susceptible to outside influence or disturbance.',
            location: {
                center: [-87.56236604152772, 41.6556252316896],
                zoom: 12.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'bike-lanes', opacity:0},
                {layer: 'bike-path-dot', opacity:0},
                {layer: 'mapbox-satellite', opacity:0},
                {layer: 'park-hegewisch', opacity:0.5}
            ],
            onChapterExit: [
                {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'existing bike lanes',
            alignment: 'left',
            hidden: false,
            //image: './images/henry-booth-house.png',
            description: 'The area has some bike lanes, mostly shared and buffered lanes along city streets. But not all of these feel safe. For example, the Hegewisch Neighborhood Plan noted that resident felt unsafe on 134th Street near Avenue O due to "excessive speeding by cars" and large trucks which are supposed to be legally prohibited from the road.',
            location: {
                center: [-87.55685590723697,
                    41.659210130018266],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:1},
                {layer: 'bike-path-dot', opacity:0},
                {layer: 'mapbox-satellite', opacity:0}
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'dot-bike-ride',
            alignment: 'left',
            hidden: false,
            //image: './images/henry-booth-house.png',
            description: 'To build awareness of the potential for biking on the southeast side, Chicago and Cook County departments of transportation planned a <a href="https://blockclubchicago.org/2023/08/16/bike-the-southeast-side-this-weekend-and-tell-officials-how-to-make-future-rides-safer/" target="_blank">bike tour through Chicago\'s Southeast side</a>, from Hegewisch Marsh Park to Calumet Park Beach. Cook County, whose recently-released <a href="https://www.cookcountyil.gov/bikeplan" target="_blank">Bike Plan</a> expansion of low-stress bike routes reaching within a mile of 96% of Cook County residents, envisions improved bike access in this area.',
            location: {
                center: [-87.55685590723697,
                    41.659210130018266],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'bike-lanes', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0},
                {layer: 'park-calumet', opacity:0.5},
                {layer: 'park-hegewisch', opacity:0.5} 
            ],
            onChapterExit: [
                {layer: 'bike-lanes', opacity:0},
                {layer: 'park-calumet', opacity:0},
                {layer: 'park-hegewisch', opacity:0}
            ]
        },
        
        
        
        {
            id: 'henry-booth',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/henry-booth-house.png',
            description: 'The route begins at Henry Booth House- close to Hegewisch Marsh Park but difficult to access across Torrence.',
            location: {
                center: [-87.55685590723697,
                    41.659210130018266],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'henry-booth', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: 'henry-booth', opacity:0}  
            ]
        },



        {
            id: '130th-baltimore',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/baltimore-130th-bike-lane.png',
            description: 'The route continued south on Baltimore, a quieter road with a dedicated bike lane.',
            location: {
                center: [-87.54712353449469,
                    41.65908775402073],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: '130th-baltimore', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: '130th-baltimore', opacity:0}       
            ]
        },



        {
            id: 'wolf-lake',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/wolf-lake-turn.jpg',
            description: 'Turning north, the route entered the park along Wolf Lake Boulevard, where bikes share the road with automobile traffic.',
            location: {
                center: [-87.53725587019011,
                    41.66690509686575],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: 'wolf-lake', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: 'wolf-lake', opacity:0} 
            ]
        },



        {
            id: '106th-ewing',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/106-ewing.png',
            description: 'Turning west along 106th, bikers were instructed to walk their bikes (for safety reasons?).',
            location: {
                center: [-87.53512142817937,
                    41.70275978503426],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {layer: '106th-ewing', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: '106th-ewing', opacity:0}
            ]
        },



        {
            id: '100th-viaduct',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/100th-viaduct.png',
            description: 'Ewing intersects with 100th Street at the I-90 underpass. A public commenter on the <a href="https://storymaps.arcgis.com/stories/56fd791cb1fa4cf69cd67411c345442a" target="_blank">Lake Calumet Bike Network Study</a> suggested that this intersection needs "better signage/markings...in these strange intersections."',
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
                {layer: '100th-viaduct', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0} 
            ],
            onChapterExit: [
                {layer: '100th-viaduct', opacity:0}
            ]
        },



        {
            id: 'calumet-beach',
            alignment: 'left',
            hidden: false,
            image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            description: 'The ride ended at Calumet Beach.',
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
                {layer: 'calumet-beach', opacity:1},
                {layer: 'bike-path-dot', opacity:1},
                {layer: 'mapbox-satellite', opacity:0},
                {layer: 'park-calumet', opacity:0.5}                 
            ],
            onChapterExit: [
                {layer: 'calumet-beach', opacity:0},
                {layer: 'park-calumet', opacity:0}
            ]
        },
        


        {
            id: 'enter-map',
            alignment: 'left',
            hidden: true,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            //description: 'This section should restore map.',
            location: {
                center: [-87.52929693758914,
                    41.714936581261895],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'enterMap',
            onChapterEnter: [                  
            ],
            onChapterExit: [
            ]
        },



        {
            id: 'dummy-step1',
            alignment: 'left',
            hidden: true,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            description: 'nothin1',
            location: {
                center: [-87.52929693758914,
                    41.714936581261895],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            //callback: 'enterMap',
            onChapterEnter: [                  
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'dummy-step2',
            alignment: 'left',
            hidden: true,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            description: 'nothin2',
            location: {
                center: [-87.52929693758914,
                    41.714936581261895],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            //callback: 'enterMap',
            onChapterEnter: [                  
            ],
            onChapterExit: [
            ]
        },
        
        
        {
            id: 'dummy-step3',
            alignment: 'left',
            hidden: true,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            description: 'nothin3',
            location: {
                center: [-87.52929693758914,
                    41.714936581261895],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            //callback: 'enterMap',
            onChapterEnter: [                  
            ],
            onChapterExit: [
            ]
        },
        
        
        
        {
            id: 'exit-map',
            alignment: 'left',
            hidden: true,
            //image: 'https://reliablerascal.github.io/bike-far-southeast/images/calumet-park-beach.jpg',
            //description: 'This section should scroll out.',
            location: {
                center: [-87.52929693758914,
                    41.714936581261895],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'exitMap',
            onChapterEnter: [                  
            ],
            onChapterExit: [
            ]
        }
        
        
//end chapters


    ]
};
